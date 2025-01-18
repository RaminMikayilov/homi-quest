"use client";

import { usePropertyStore } from "@/utils/store";
import { Booking } from "@/utils/types";
import BookingCalendar from "./BookingCalendar";
import { useEffect } from "react";
import BookingContainer from "./BookingContainer";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};
export default function BookingWrapper({
  propertyId,
  price,
  bookings,
}: BookingWrapperProps) {
  useEffect(() => {
    usePropertyStore.setState({
      propertyId,
      price,
      bookings,
    });
  }, []);

  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  );
}
