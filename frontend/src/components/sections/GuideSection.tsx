import Container from "@components/common/container/Container";
import Section from "@components/common/Section";
import LineWithVertical from "@components/svg/LineWithVertical";

export default function GuideSection() {
  return (
    <Section
      id="guide-section"
      className="!bg-parallax-background_15 bg-cover flex flex-col justify-center items-center"
    >
      <Container className="py-12 text-white flex flex-col">
        <LineWithVertical />
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-wrap justify-between m-auto overflow-hidden">
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
                    Step 3: Confirm your information and click submit to
                    finalize.
                  </li>
                  <li className="mb-4">
                    Step 4: You will receive a confirmation email once your form
                    has been successfully submitted.
                  </li>
                  <li className="mb-4">
                    Step 5: If you encounter any issues, please contact support
                    via the contact page.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex w-full sm:w-1/3 p-4">
              <div className="text-center p-6 bg-blue rounded-md shadow-lg w-full">
                <h2 className="text-xl font-semibold mb-6">Form Fields</h2>
                <ul className="text-left mt-4 ml-4 list-disc">
                  <li className="mb-4">
                    Field 1: Name – Please enter your full name.
                  </li>
                  <li className="mb-4">
                    Field 2: Email – Enter a valid email address.
                  </li>
                  <li className="mb-4">
                    Field 3: Contact Number – Provide a phone number where we
                    can reach you.
                  </li>
                  <li className="mb-4">
                    Field 4: Preferences – Select the options that best describe
                    your interests.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex w-full sm:w-1/3 p-4">
              <div className="text-center p-6 bg-blue rounded-md shadow-lg w-full">
                <h2 className="text-xl font-semibold mb-6">
                  Submission Guidelines
                </h2>
                <ul className="text-left mt-4 ml-4 list-disc">
                  <li className="mb-4">
                    Ensure all fields are correctly filled out before
                    submitting.
                  </li>
                  <li className="mb-4">
                    Double-check your email address for accuracy to receive
                    updates.
                  </li>
                  <li className="mb-4">
                    You can edit the form anytime before final submission.
                  </li>
                  <li className="mb-4">
                    Once submitted, you will not be able to make further
                    changes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="uppercase self-center font-poppins font-extrabold text-3xl pb-8 text-center text-blue">
            Form Submission Instructions
          </h2>
        </div>
      </Container>
    </Section>
  );
}
