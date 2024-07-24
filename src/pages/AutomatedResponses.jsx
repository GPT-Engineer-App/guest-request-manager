import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";

const AutomatedResponses = () => {
  const responses = [
    { id: 1, type: "Check-in Information", trigger: "Booking Confirmation", status: true },
    { id: 2, type: "Wi-Fi Password", trigger: "Guest Arrival", status: true },
    { id: 3, type: "Late Check-out Request", trigger: "Guest Message", status: false },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Automated Responses</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Response Type</TableHead>
            <TableHead>Trigger Conditions</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {responses.map((response) => (
            <TableRow key={response.id}>
              <TableCell>{response.type}</TableCell>
              <TableCell>{response.trigger}</TableCell>
              <TableCell>
                <Switch checked={response.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AutomatedResponses;