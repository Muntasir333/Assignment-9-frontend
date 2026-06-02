"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { toast } from "react-toastify";

export function Facilitydlt( {facilityId} ) {
    const handleCancel = async () => {
      const tokenResponse = await authClient.token();
      const token = tokenResponse?.data?.token;
      if (!token) {
        console.log("No token");
        return;
    }
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${facilityId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        const data = await res.json();

        if (res.ok) {
            toast.success("Facility deleted successfully");
            window.location.reload(); 
        } else {
            toast.error("Failed to delete facility. Please try again.");
        }
    };
  return (
    <AlertDialog>
      <Button variant="danger" >
        Delete Facility
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete facility permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Your Facility Data</strong>. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancel} slot="close" variant="danger">
                Delete Facility
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
export default Facilitydlt;