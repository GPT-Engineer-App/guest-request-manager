import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const IncomingRequests = () => {
  const requests = [
    { id: 1, guest: "John Doe", type: "Room Service", date: "2023-03-15", status: "New" },
    { id: 2, guest: "Jane Smith", type: "Maintenance", date: "2023-03-14", status: "In Progress" },
    { id: 3, guest: "Bob Johnson", type: "Reservation", date: "2023-03-13", status: "Completed" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Incoming Requests</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Request Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.guest}</TableCell>
              <TableCell>{request.type}</TableCell>
              <TableCell>{request.date}</TableCell>
              <TableCell>
                <Badge variant={request.status === "New" ? "default" : request.status === "In Progress" ? "secondary" : "outline"}>
                  {request.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IncomingRequests;