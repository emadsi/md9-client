export interface IReservation {
    reservationId: string;
    reserverName: string;
    mobile: string;
    date: string;
    fieldId: string;
    timeslotId: string;
    paymentMethod: IPaymentMethod; // "Cash" or "Credit"
    confirmationNo: string;
    status: ReservationStatus; // "Done", "Cancelled", "Pending"
    createdAt: string;
}

export enum IPaymentMethod {
    CASH = "CASH",
    CREDIT = "CREDIT"
} 

export enum ReservationStatus {
    DONE = "DONE",
    CANCELLED = "CANCELLED",
    PENDING = "PENDING"
}