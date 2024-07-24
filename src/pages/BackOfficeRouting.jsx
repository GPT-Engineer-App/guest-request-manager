import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const BackOfficeRouting = () => {
  const tasks = [
    { id: 1, type: "Special Request", assigned: "Alice", date: "2023-03-15", status: "Pending" },
    { id: 2, type: "Complaint Resolution", assigned: "Bob", date: "2023-03-14", status: "In Progress" },
    { id: 3, type: "VIP Guest Arrangement", assigned: "Charlie", date: "2023-03-13", status: "Completed" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Back Office Routing</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task Type</TableHead>
            <TableHead>Assigned Staff</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.type}</TableCell>
              <TableCell>{task.assigned}</TableCell>
              <TableCell>{task.date}</TableCell>
              <TableCell>
                <Badge variant={task.status === "Pending" ? "default" : task.status === "In Progress" ? "secondary" : "outline"}>
                  {task.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BackOfficeRouting;