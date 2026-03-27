import "@testing-library/jest-dom";


class MockTextEncoder {
  encode(input: string): Uint8Array {
    return new Uint8Array([...input].map((c) => c.charCodeAt(0)));
  }
}

class MockTextDecoder {
  decode(input: Uint8Array): string {
    return Array.from(input)
      .map((b) => String.fromCharCode(b))
      .join("");
  }
}


Object.assign(globalThis, {
  TextEncoder: MockTextEncoder,
  TextDecoder: MockTextDecoder,
});

globalThis.fetch = jest.fn();

// Mock localStorage
class LocalStorageMock {
  store: Record<string, string> = {};

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] ?? null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

Object.defineProperty(window, "localStorage", {
  value: new LocalStorageMock(),
  writable: true,
});

beforeEach(() => {
  window.localStorage.clear();
  jest.clearAllMocks();
});