import Link from "next/link";
import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";
  return (
    <div className=" flex h-screen max-h-screen">
          {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
    
        <div className="sub-container max-w-[496px]">
        <p className="sub-header mb-12 h-10">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="logo"
              className=" w-fit inline-flex"
            /> Care Plan
          </p>

        
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePlan
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
export default Home;