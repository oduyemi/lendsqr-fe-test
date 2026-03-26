import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../services/users.service";
import { useOrganization } from "../../../context/organization.context";



export const useUsers = (page: number, limit: number) => {
  const { activeOrg } = useOrganization();

  return useQuery({
    queryKey: ["users", page, activeOrg],
    queryFn: () => getUsers({ page, limit, organization: activeOrg }),
  });
};