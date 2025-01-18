"use client";

import { usePropertyStore } from "@/utils/store";
import BookingForm from "./BookinForm";
import ConfirmBooking from "./ConfirmBooking";
function BookingContainer() {
  const { range } = usePropertyStore();

  if (!range || !range.from || !range.to) return null;
  if (range.to.getTime() === range.from.getTime()) return null;
  return (
    <div className="w-full">
      <BookingForm />
      <ConfirmBooking />
    </div>
  );
}

export default BookingContainer;
