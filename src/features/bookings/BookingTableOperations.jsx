import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="status"
        options={[
          { value: "all", title: "All" },
          { value: "checked-out", title: "Checked out" },
          { value: "checked-in", title: "Checked in" },
          { value: "unconfirmed", title: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", title: "Sort by date (recent first)" },
          { value: "startDate-asc", title: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            title: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", title: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
