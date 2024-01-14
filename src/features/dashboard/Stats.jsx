/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // 1. Number of bookings

  // eslint-disable-next-line react/prop-types
  const numBookings = bookings.length;

  // 2.

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.

  const checkins = confirmedStays.length;

  // 4.

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="Bookings"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        color="blue"
      />
      <Stat
        title="Sales"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        title="Check ins"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
        color="indigo"
      />
      <Stat
        title="Occupancy rate"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
      />
    </>
  );
}
