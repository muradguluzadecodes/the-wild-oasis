import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="discount"
        options={[
          { value: "all", title: "All" },
          { value: "no-discount", title: "No Discount" },
          { value: "with-discount", title: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", title: "Sort by name A-Z" },
          { value: "name-desc", title: "Sort by name Z-A" },
          { value: "regularPrice-asc", title: "Sort by prize (low first)" },
          { value: "regularPrice-desc", title: "Sort by prize (high first)" },
          { value: "maxCapacity-asc", title: "Sort by capacity (loww first)" },
          { value: "maxCapacity-desc", title: "Sort by capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}
