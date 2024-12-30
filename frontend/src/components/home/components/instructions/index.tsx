import ContentContainer from "@components/common/containers/ContentContainer";
import SvgLine from "@components/common/svgs/SvgLine";

export default function Instructions() {
  return (
    <ContentContainer className="py-12 text-white flex flex-col">
      <SvgLine align="right" />
      <div className="flex flex-col sm:flex-row justify-between m-auto overflow-hidden marker:text-red">
        {/* Form Submission Instructions - Colocado primeiro em telas pequenas */}
        <div className="flex w-full sm:w-1/3 p-4">
          <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6">
              Form Submission Instructions
            </h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                Ensure all fields are correctly filled out before submitting.
              </li>
              <li className="mb-4">
                Double-check your email address for accuracy to receive updates.
              </li>
              <li className="mb-4">
                You can edit the form anytime before final submission.
              </li>
              <li className="mb-4">
                Once submitted, you will not be able to make further changes.
              </li>
            </ul>
          </div>
        </div>

        {/* Instructions for Form Use */}
        <div className="flex w-full sm:w-1/3 p-4">
          <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6">
              Instructions for Form Use
            </h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                Step 1: Enter your personal details in the fields below.
              </li>
              <li className="mb-4">
                Step 2: Select your preferences from the available options.
              </li>
              <li className="mb-4">
                Step 3: Confirm your information and click submit to finalize.
              </li>
              <li className="mb-4">
                Step 4: You will receive a confirmation email once your form has
                been successfully submitted.
              </li>
            </ul>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex w-full sm:w-1/3 p-4">
          <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6">Form Fields</h2>
            <ul className="text-left mt-4 ml-4 list-disc ">
              <li className="mb-4">
                Field 1: Name – Please enter your full name.
              </li>
              <li className="mb-4">
                Field 2: Email – Enter a valid email address.
              </li>
              <li className="mb-4">
                Field 3: Contact Number – Provide a phone number where we can
                reach you.
              </li>
              <li className="mb-4">
                Field 4: Preferences – Select the options that best describe
                your interests.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full sm:w-1/3 items-center order-first sm:order-last">
          <h2 className="uppercase font-poppins font-extrabold text-3xl text-center text-blue">
            guia de preenchimento do formulário
          </h2>
        </div>
      </div>
    </ContentContainer>
  );
}
