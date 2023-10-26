export interface Auth {
    configurePassport(): Promise<any>;
    login?(): Promise<any>;
    signup?(): Promise<any>;
}