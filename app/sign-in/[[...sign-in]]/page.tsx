import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="py-24">
      <div className="container flex justify-center items-center">
        <SignIn path="/sign-in" routing="path" />
      </div>
    </div>
  );
}