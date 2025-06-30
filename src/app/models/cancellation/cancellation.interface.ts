export interface Cancellation {
    cancellationId: string;
    reservationId: string;
    reason: string;
    cancelledBy: CancelledByOptions;
    cancelledAt: string;
}

export enum CancelledByOptions {
    ADMIN = "ADMIN",
    USER = "USER"
}