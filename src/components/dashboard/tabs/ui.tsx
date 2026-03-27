import "../../../styles/user-details.scss"


type SectionProps = {
    title: string;
    children: React.ReactNode;
  };
  
  type InfoProps = {
    label: string;
    value?: string | number | null;
  };

export const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div className="section">
        <h6>{title}</h6>
        <div className="grid">{children}</div>
    </div>
    );

    export const Info: React.FC<InfoProps> = ({ label, value }) => (
    <div className="info">
        <span className="label">{label}</span>
        <span className="value">{value || "—"}</span>
    </div>
);