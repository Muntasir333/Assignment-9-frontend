"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { toast } from "react-toastify";

export function Bookingcancel( {bookingId} ) {
    const handleCancel = async () => {
      const tokenResponse = await authClient.token();
      const token = tokenResponse?.data?.token;
      if (!token) {
        console.log("No token");
        return;
    }
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        const data = await res.json();

        if (res.ok) {
            toast.success("Booking cancelled successfully");
            window.location.reload(); // Refresh the page to reflect changes
        } else {
            toast.error("Failed to cancel booking. Please try again.");
        }
    };
  return (
    <AlertDialog>
      <Button variant="danger" >
        Cancel Booking
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel bookings permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Your Booking Data</strong>. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancel} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
export default Bookingcancel;