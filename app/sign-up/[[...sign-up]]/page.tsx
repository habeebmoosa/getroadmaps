import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="py-24">
            <div className="container flex justify-center items-center">
                <SignUp path="/sign-up" />
            </div>
        </div>
    );
}