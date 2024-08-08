"use client";
import React, { useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiAlignJustify } from "react-icons/fi";

const PrivacyPolicy = () => {
  const [count, setCount] = useState(1);
  const [open, isOpen] = useState(false);

  return (
    <main className="bg-white font-[Poppins] min-w-[320px]">
      <div
        style={{ backgroundImage: `url(${"/images/landing-back1.png"})` }}
        className="bg-contain h-full  "
      >
        <div className="h-full  w-[100%] text-[#FFF]  ">
          <ul className="lg:flex pt-7  px-5 text-2xl font-[Ultra] md:mx-14 justify-between text-center items-center  max-lg:text-lg max-lg:flex-wrap ">
            <li className=" max-lg:flex max-lg:justify-between max-lg:w-full ">
              <img
                src="/images/lemon.png"
                className="max-md:w-22 max-w-[110px] max-md:max-w-[90px]"
                alt="not found"
              />
              <span
                onClick={() => isOpen(!open)}
                className="pt-5 text-3xl lg:hidden "
              >
                <FiAlignJustify />
              </span>
            </li>
            <div
              className={`flex md:mx-20 max-lg:items-center gap-10 text-center items-center max-xl:flex-wrap max-md:text-lg max-lg:flex-col ${
                open ? "" : "max-lg:hidden"
              }`}
            >
              <li className="flex-auto cursor-pointer ">
                {" "}
                <a href="/">Home</a>
              </li>
              <li className="flex-auto cursor-pointer">
                <a href="/">Features</a>
              </li>
              <li className="flex-auto cursor-pointer ">
                {" "}
                <a href="/">Testimonials</a>
              </li>
              <li className="flex-auto cursor-pointer ">
                {" "}
                <a href="/">FAQ</a>
              </li>
              <li className="flex-auto cursor-pointer ">
                <a href="/">Contact</a>
              </li>
            </div>
            <li>
              <button
                className={`bg-[#FFCE00] text-black whitespace-nowrap py-1 max-lg:mt-9 text-xl font-sans rounded-2xl px-4 ${
                  open ? "" : "max-lg:hidden"
                }`}
              >
                Get Started
              </button>
            </li>
          </ul>
          <div className="flex max-lg:flex-col gap-28 pb-28 max-md:pb-14 ">
            <div className=" leading-tight md:pl-24 max-lg:px-10 max-lg:pb-10 ">
              <div className="text-white  mt-28 font-[Ultra] items-center text-[37px] ">
                Privacy
                <span className="text-[#FFCC18] "> Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third block */}
      <div className="md:w-[85%] mx-auto max-md:px-10 py-10">
        <div className="flex justify-center font-semibold text-3xl">
          Privacy policy{" "}
        </div>
        <div className="mt-10">
          This Privacy Policy discloses the privacy practices of KJLEMON, LLC.
          (“KJLEMON”, “us”, “our”, or “we”) with respect to your information
          collected, stored, disclosed, and used by KJLEMON, its subsidiaries,
          and corporate affiliates, through our Services, including our Websites
          and Applications (as defined in the{" "}
          <a
            href="/terms-of-service"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Terms and Conditions of Service
          </a>{" "}
          or Agreement).
        </div>
        <div className="mt-5 font-semibold">
          YOUR USE OF OUR SERVICES IS SUBJECT TO THIS PRIVACY POLICY AND THE
          APPLICABLE TERMS AND CONDITIONS OF SERVICE. BY USING OUR SERVICES, YOU
          ARE ACCEPTING THE PRACTICES SET OUT IN THIS PRIVACY POLICY AND THE
          APPLICABLE TERMS AND CONDITIONS OF SERVICE.
        </div>
        <div className="mt-10 font-semibold text-2xl">
          1. What Personal Information We Collect and How We Collect It{" "}
        </div>
        <div className="mt-10">
          In order to provide our Services, we collect information about you
          that alone or in combination with other information, can be used to
          identify you as an individual (“personal information”). What personal
          information we collect and process when you use our Services depends
          on how and why you interact with us
        </div>
        <div className="mt-5">
          <span className="underline ">Personal Information You Provide.</span>{" "}
          When you register for an account or subscribe to any of our Services,
          we collect a variety of information about you, including your contact
          information such as your name, email address, contact number, mailing
          address, date of birth, dating preferences, etc. When you sign up for
          our Services, you may provide us with answers to our proprietary
          questionnaire (our Compatibility Quiz), which we use to build a
          personality profile for you and to match you with other compatible
          singles. You may also choose to provide us with your photo(s), which
          may contain personal information. By providing us with photo(s), you
          agree that we may make them available to your potential partners and
          users of KJLEMON’s Services. We may also collect your name, contact
          information (such as your email), and a copy of your correspondence
          with us if you contact us. If you correspond with other KJLEMON
          members through the KJLEMON platform, we will collect and store this
          information. To process purchases, we may require your name, address,
          phone number, email address, and payment information, including but
          not necessarily limited to credit or debit card information and
          associated account information. If you would like us to delete such
          payment information from our systems, you may contact us as described
          under the “Contacting Us” section below.
        </div>
        <div className="mt-5">
          <span className="underline">Sensitive Personal Information.</span>{" "}
          During the registration process and while updating your profile, you
          may provide us with personal information that is considered
          “sensitive” in your jurisdiction, including but not limited to,
          religious beliefs, ethnicity, and political views. This information is
          only used by us to provide the services to you. You may change or
          update your information by accessing your profile at any time or
          selecting the “prefer not to specify” option in response to any
          questions requesting such information.
        </div>
        <div className="mt-5">
          <span className="underline">Surveys.</span> We may periodically
          conduct voluntary member surveys. We encourage our members to
          participate in such surveys because they provide us with important
          information regarding the improvement of our Services. You may also
          volunteer for certain surveys that we may offer to our users and any
          additional rules regarding the conduct of such surveys will be
          disclosed to you before your participation. We do not link the survey
          responses to any personal information, and all responses are
          anonymous.
        </div>
        <div className="mt-5">
          <span className="underline">
            Personal Information We Automatically Collect.
          </span>
          When you access or use our Services, we automatically collect
          information about how you access and use our Websites and Services. If
          you use a mobile device to access or download any of our Services, we
          may also collect device information (such as your mobile device ID,
          model, and manufacturer), operating system, and version information.
          We use this information in the aggregate to analyze trends, administer
          our Services, prevent fraud, understand how users interact with our
          Services, and gather demographic information to tailor our visitor’s
          experience of our Services, show them content that we think they might
          be interested in, and display the content according to their
          preferences. We do not share this information with third parties.
        </div>
        <div className="mt-5 font-semibold">
          The technologies we use to automatically collect data from you may
          include:
        </div>
        <div className="mt-5">
          {" "}
          <span className="underline">1. Cookies & Web Tracking.</span> We use
          “cookies” to keep track of some types of information while you are
          accessing or using our Services. Cookies are very small files placed
          on your computer, and they allow us to count the number of visitors to
          our Websites and distinguish repeat visitors from new visitors. They
          also allow us to save user preferences and track user trends. We rely
          on cookies for the proper operation of our Websites; therefore if your
          browser is set to reject all cookies, the website will not function
          properly. Some cookies are automatically erased after the end of the
          browser session (these are “session cookies”), whereas other cookies
          are stored for a predetermined amount of time or permanently in your
          browser before they erase themselves (these are “temporary" or
          "permanent" cookies). While a cookie may distinguish your device, it
          will not name you. Almost every website uses cookie technology.
        </div>
        <div className="mt-4">
          We have listed the name of each cookie and each other web tracking
          mechanism, as well as the intended purpose of the cookie or other web
          tracking mechanism and other important information.
        </div>
        <div>
          <a style={{ color: "black", textDecoration: "underline" }}>
            What kind of cookies does KJLEMON use?
          </a>
        </div>
        <div className="mt-5 font-semibold">Strictly necessary cookies</div>
        <div className="mt-5">
          <p>
            We use certain cookies to make sure that our Websites and our
            Services are easy, secure, and safe to use. Without these cookies,
            the Services that you have asked for (such as secure Websites and
            Services), would not be possible. This category of cookies includes:{" "}
          </p>
          <p>
            » Cookies that identify or authenticate our users to ensure that our
            Service is secure;{" "}
          </p>
          <p>» Cookies that temporarily store certain user entries ; </p>
          <p>
            » Cookies that store certain user preferences (such as your language
            choices).{" "}
          </p>
        </div>
        {/* 
        <div>We use certain cookies to make sure that our Websites and our Services are easy, secure, and safe to use. Without these cookies, the Services that you have asked for (such as secure Websites and Services), would not be possible. This category of cookies includes:
          » Cookies that identify or authenticate our users to ensure that our Service is secure;
          » Cookies that temporarily store certain user entries ;
          » Cookies that store certain user preferences (such as your language choices). </div> */}
        <div className="mt-5 font-semibold">Analytics cookies</div>
        <div className="mt-5">
          We use analytics cookies to record usage data about our users (e.g.
          which users have visited which of our subpages, etc.) and to evaluate
          this information statistically.
        </div>
        <div style={{ textDecoration: "underline" }}>
          How can you deactivate or erase our cookies?
        </div>
        <div>
          You can deactivate cookies on your device via your browser settings;
          and you can erase any cookies already stored on your device at any
          time in your browser. Please note, however, that if you choose to
          deactivate or remove cookies, doing so may prevent certain features on
          our Websites from working properly and therefore affect your
          experience on our Websites. In addition, you may not be able to use
          all the features of our Service if you deactivate or remove cookies.
        </div>
        <div>
          2. <span style={{ textDecoration: "underline" }}>Web Beacons.</span>{" "}
          “Web beacons” (also known as “clear gifs” and “pixel tags”) are small
          transparent graphic images that are often used in conjunction with
          cookies in order to further personalize our website for our users and
          to collect a limited set of information about our visitors. We may
          also use web beacons in email communications in order to understand
          the behavior of our customers.
        </div>
        <div>
          3. <span style={{ textDecoration: "underline" }}>Web Analytics.</span>{" "}
          We collect and use statistical information about your use of our
          Services to make it more user-friendly, to understand our market
          share, to conduct other market research, and to make sure that we
          display relevant advertisements for you. To this end, we work with
          various authorized service providers; and we use analytics tools in
          our Services. However, these tools will not use your IP address, or
          (if they do), they will shorten it immediately after collection (which
          means that it will be less clearly linked to your device). These tools
          will also generate user profiles by using analytic cookies or by
          evaluating log files; however, these user profiles will not be linked
          to your real-world information and will not name you.
        </div>
        <div>
          4.{" "}
          <span style={{ textDecoration: "underline" }}>
            Promotional e-mails.
          </span>{" "}
          Promotional e-mail messages we send you may contain code that enables
          our database to track your usage of the e-mails, including whether the
          e-mail was opened and what links (if any) were clicked. If you would
          rather not receive promotional e-mails from us, please see the section
          below labeled “Choice/Opt-Out.”
        </div>
        <div>
          <span style={{ textDecoration: "underline" }}>
            Personal Information We Receive from Others:
          </span>{" "}
          In addition to personal information, you provide us directly, and that
          we collect automatically, we also may receive personal information
          from:
        </div>
        <div>
          • Fraud-detection and credit-reference agencies to correct our records
          and help prevent and detect fraud; • Sources that are available to the
          public, including government entities, which we might combine with
          information that we collect from you directly; and • A family member
          or someone else acting on your behalf.
        </div>
        <div>
          We encourage users to refer a friend to our Service by sending us a
          friend’s name and email address. We will send that person a one-time
          e-mail containing your name and inviting them to visit our site. This
          e-mail will contain a contact address to send their request if they
          want to unsubscribe. We will not keep information about your friend in
          our database after the email has been sent. If you refer a friend, you
          agree that you will not abuse this feature by entering the names and
          addresses of those who would not be interested in KJLEMON’s Services.
          For some of our Services, you may also give gift memberships to your
          friends, in which case we will use your friends’ e-mail addresses that
          you provide to deliver the gift.
        </div>
        <div>
          <div className="mt-5 font-semibold text-2xl">
            {" "}
            2. How and Why We Use Your Personal Information
          </div>
        </div>
        <div className="mt-5">
          We use information that we collect about you or that you provide to
          us, including any personal information, to:
        </div>
        <div>
          <p>• Provide, improve, and secure our Services;</p>
          <p>
            • Establish and manage user accounts, such as your “My Profile”;
          </p>
          <p>
            • Display the public fields of your profile to your potential
            partners, including recent login date, user name, photos, videos,
            and other profile content;
          </p>
          <p>
            • Provide customer support, troubleshoot issues, manage our
            Services, and respond to requests, questions, and comments;
          </p>
          <p>• Process transactions;</p>
          <p>
            • Communicate with you about our Services, including order
            confirmation, refund, and renewal processing, notifying of potential
            partners for our Service, Service announcements, and administrative
            messages;
          </p>
          <p>
            • Communicate with you regarding promotions, including newsletters,
            new product offerings, special discounts, and event notifications.
            Our communications may include advertisements and other third-party
            promotional materials, campaigns, and tools.;
          </p>
          <p>• Conduct market and consumer research and trend analyses;</p>
          <p>
            • Enable posting on our blogs, forums, and other public
            communications;
          </p>
          <p>
            • Perform accounting, auditing, billing, reconciliation, and
            collection activities including collecting on outstanding and past
            due account balances;
          </p>
          <p>
            • Prevent, detect, identify, investigate, and respond to potential
            or actual claims, liabilities, prohibited behavior, and criminal
            activity;
          </p>
          <p>
            • Comply with and enforce legal requirements, agreements, and
            policies;
          </p>
          <p>
            • Achieve purposes for which we provide specific notice at the time
            of collection; and
          </p>
          <p>• For any other purpose with your consent.</p>
          One of the methods we use to communicate with you in connection with
          KJLEMON’s Services may be by telephone or text message (including any
          wireless number you may provide to us). For example, you may sign up
          for a text messaging service (“SMS Verification”) which enables
          KJLEMON to verify your phone number via a confirmed text message and
          display such verification in your public account (as a security
          measure for your potential partners’ benefit). If you would rather not
          receive telephone calls or text messages from us, you may change or
          delete your number from your account preferences page(s) or ask to be
          removed from our contact list if you receive a call or text message
          from us. If you want to opt out of the SMS Verification service,
          please{" "}
          <a
            style={{ textDecoration: "underline", color: "blue" }}
            href="mailto:privacy@kjlemons.com"
          >
            send us an e-mail
          </a>{" "}
          at any time. Please note that we or one of our service providers may
          contact you by telephone in connection with an outstanding and
          past-due balance on your account. Opting out of receiving telephone
          calls will not prevent you from receiving calls related to an
          outstanding balance. In addition to the uses outlined above, by
          accessing or using our Services, you agree to allow us to anonymously
          use the information from you and your experiences to continue our
          research into successful relationships. This research, conducted by
          psychologists and behavior research scientists, may be published in
          academic journals. However, all of your responses will be kept
          anonymous, and no personal information will be published.
        </div>
        <div>
          <div className="mt-5 font-semibold text-2xl">
            3. Mobile Push Notifications
          </div>
        </div>
        <div className="mt-5">
          We will send you push notifications if you choose to receive them to
          receive notice of potential partners for our Service, letting you know
          when someone has sent you a message, or for other Service-related
          matters. If you wish to opt-out from receiving these types of
          communications, you may turn them off at the device level.
        </div>
        <div className="mt-5 font-semibold text-2xl">
          4. If Information is Not Provided
        </div>
        <div className="mt-5">
          If you do not provide us with the personal information we request,
          this may limit our ability to fulfill the applicable purpose for
          collection and the Services we can provide you. For example, we may
          not be able to consider or process your payment, match you with other
          users, or provide a particular service you have requested.
        </div>
        <div className="mt-5 font-semibold text-2xl">
          5. Disclosure of Your Personal Information
        </div>
        <div className="mt-5">
          <a style={{ textDecoration: "underline" }}>In general.</a> We may
          disclose the personal information we collect:
          <p>
            • With current and future organizations that are part of our network
            of organizations for the purposes described in this Privacy Policy,
            including with your consent.
          </p>
          <p>
            {" "}
            • With affiliated and unaffiliated service providers who help us
            perform and deliver our Services, subject to confidentiality
            agreements, including customer care agents; technology assistants;
            service fulfillment; form processing; website management and
            hosting; information technology and security; email and newsletter
            delivery; marketing vendors; auditing; collection agencies; and
            credit card processing.
          </p>
          <p>
            • With third parties such as advertising partners, including direct
            partners and advertising networks, and corporate sponsors;
          </p>
          <p>
            • With the appropriate authorities if we believe disclosure is
            necessary and appropriate to prevent physical, financial, or other
            harm, injury, or loss, including to protect against fraud or credit
            risk.
          </p>
          <p>
            • With legal, governmental, or judicial authorities as instructed or
            required by those authorities and applicable laws, or to a legal
            activity, such as in response to a subpoena or investigation of
            suspected illicit or illegal activities, or where we believe in good
            faith that users may be engaged in illicit or illegal activities, or
            where we are bound by contract or law to enable a network partner to
            comply with applicable laws;
          </p>
          <p>
            • With necessary third parties in connection with, or during
            negotiations for, an acquisition, merger, asset sale, or other
            similar business transfer that involves all or substantially all of
            our assets or functions where personal information is transferred or
            shared as part of the business assets.
          </p>
          <p>
            • With your consent or at your direction, such as when you choose to
            share information or publicly post content and reviews (for example,
            social media posts); and
          </p>
          <p>
            • With persons of your choosing and at your discretion, should the
            Services you are subscribed to allow that functionality.
          </p>
        </div>
        <div className="mt-5 font-semibold">
          In addition, KJLEMON may disclose personal information as follows.
        </div>
        <div className="mt-5">
          •{" "}
          <a style={{ textDecoration: "underline" }}>
            To Your Potential Partners.
          </a>{" "}
          As an integral part of providing the KJLEMON Service, we will disclose
          your profile information (including, but not limited to, your last
          login date, whether you are currently online, and your compatibility
          score) to your potential partners. Photos and other profile
          information posted by you will be available to subscribers that are
          matched with you. We never share your contact information with your
          potential partners.
        </div>
        <div>
          •{" "}
          <a style={{ textDecoration: "underline" }}>
            To Protect Abuse Victims.
          </a>{" "}
          Notwithstanding any other provision of this Privacy P o l i c y or our
          Terms and Conditions of Service, we reserve the right, but have no
          obligation, to disclose any information that you submit to the
          Services, if in our sole opinion, we suspect or have reason to
          suspect, that the information involves a party who may be the victim
          of abuse in any form. Abuse may include, without limitation, elder
          abuse, child abuse, spousal abuse, neglect, or domestic violence.
          Information may be disclosed to authorities that we, in our sole
          discretion, deem appropriate to handle such disclosure. Appropriate
          authorities may include, without limitation, law enforcement agencies,
          child protection agencies, or court officials. You hereby acknowledge
          and agree that we are permitted to make such a disclosure.
        </div>
        <div>
          •<a style={{ textDecoration: "underline" }}>To other Locales.</a> We
          process all information, including your personal information, via our
          servers and networks located in the United States and Germany.
          Additionally, some of our service providers may be located in other
          jurisdictions. By using our services and expressly assenting to this
          privacy policy, you have consented to the transfer of your personal
          information solely to provide you the Services for which you have
          registered or to which you have subscribed. We take all reasonable
          steps to ensure that all overseas recipients will not hold, use, or
          disclose your personal information inconsistent with applicable law.
        </div>
        <div className="mt-5 font-semibold text-2xl">
          {" "}
          6. Third-Party Advertising
        </div>
        <p className="mt-5">
          We may use third-party advertising agencies or other service providers
          to serve ads on our website on behalf of KJLEMON. These companies may
          employ cookies or pixels to measure advertising effectiveness. Any
          information that these third parties collect via cookies and pixels is
          anonymous.{" "}
        </p>
        <p>
          We may also share your personal information (such as your IP address,
          device identifier, or hashed email address) with third-party
          advertising companies to allow these companies to deliver relevant
          advertising to you.{" "}
        </p>
        <p>
          We will only share your information with third parties in the ways
          defined in this Privacy Policy.{" "}
        </p>
        <div className="mt-5 font-semibold text-2xl">7. Age Restrictions</div>
        <p className="mt-5">
          We only accept registrations to our Services from users who are 18
          years or older (or the age of majority in applicable jurisdictions).
          If you believe that we may have collected any such personal
          information through our Services, please notify us as specified below
          and we will endeavor to delete that information from our systems by
          applicable law.
        </p>
        <div className="mt-5 font-semibold text-2xl">8. Custom Audience</div>
        <p className="mt-5">
          We may also use advertising services provided by third-party platforms
          (such as social networking and other websites). For example, we may
          provide a hashed version of your email address or other information to
          help us find audiences that are likely to be interested in our
          Services.
        </p>
        <div className="mt-5 font-semibold text-2xl"> 9. Security</div>
        <p className="mt-5">
          We store information in a combination of electronic storage
          facilities, paper-based files, and other records. While we cannot
          guarantee your personal information is completely secure at all times,
          we have administrative, organizational, technical, and physical
          security measures in place to help protect against the loss, misuse,
          and alteration of the information collected and processed. These
          measures include the use of firewalls, digital certificates, Security
          Socket Layer (SSL), and encryption technology during credit card
          transactions and administrative access to site data, as well as other
          proprietary security measures that are applied to all repositories and
          transfers of user information.
        </p>
        <div className="mt-5 font-semibold text-2xl">
          10. “Do Not Track” Signals
        </div>
        <p className="mt-5">
          We do not process or respond to web browsers “do not track” signals or
          other similar transmissions that indicate a request to disable online
          tracking of users who use or visit our websites. You may, however,
          disable certain tracking as discussed above (e.g., by disabling
          cookies). Please consult the “Help” section of your internet browser
          for more information.
        </p>
        <div className="mt-5 font-semibold text-2xl">
          11. Links to or Access from Other Sites
        </div>
        <p className="mt-5">
          You may be able to access your account or the content of your account
          from third-party websites, such as social networking sites (e.g.,
          Facebook), by way of various applications. These services will
          authenticate your identity and provide you with the option to share
          certain personal information with us such as your name and email
          address to pre-populate our registration form. The privacy policies
          and practices of such sites in connection with information you
          disclose on such sites may differ from the practices of KJLEMON as
          outlined in this Privacy Policy. We are not responsible for the
          privacy policies or practices or the content of any other websites
          that may provide access to, or be linked to, or from, our Services,
          including that of any social networking sites. Please be aware that,
          should you choose to use the Facebook or Apple login feature for your
          KJLEMON account, you should not permit other people to use your
          Facebook or Apple accounts or give other persons your login
          information for those websites. (See also Terms & Conditions, Section
          2(e) (“Exclusive Use”).)
        </p>
        <div className="mt-5 font-semibold text-2xl"> 12. Choice/Opt-Out</div>
        <p className="mt-5">
          You may use the following options for removing your information from
          our e-mail database if you wish to opt out of receiving promotional
          emails.
        </p>
        <p>
          {" "}
          1. Click on the "unsubscribe" link at the bottom of the e-mail;{" "}
          <a style={{ textDecoration: "underline" }}>
            subscriptions@kjlemons.com
          </a>{" "}
          or report@kjlemons.com
        </p>
        <p>
          2. Send mail to the following postal address letting us know which
          promotional e-mails you wish to opt out of:
        </p>{" "}
        <p>
          KJLEMON LLC. 26830 SUGARITE CANYON Dr MORENO VALLEY, CA 92555 3. For
          the KJLEMON Service, select our{" "}
          <a style={{ color: "blue" }}>Help link</a> from your account home page
          and search our <a style={{ color: "blue" }}>FAQ's </a>to find the
          answer you are looking for, or{" "}
          <a style={{ color: "blue" }} href="mailto:privacy@kjlemons.com">
            send us an e-mail
          </a>{" "}
          and our Customer Care agents will be happy to assist you; or 4. For
          any Services that allow you to control which e-mails you receive, go
          to the Notifications page, and uncheck the undesired promotions.
        </p>
        <div className="mt-5 font-semibold text-2xl">
          13. Right to Access, Delete, Correct/Update Your Personal Information
        </div>
        <p className="mt-5">
          KJLEMON provides users the following options to access, delete,
          correct/update, or delete information previously submitted to us.
          KJLEMON requires that some personal information updates (such as date
          of birth changes) be processed by our customer care group for
          verification purposes and to protect other members. In order to make
          such personal information updates, please contact Customer Care at{" "}
          <a style={{ textDecoration: "underline" }}>
            subscriptions@kjlemons.com
          </a>{" "}
          for further assistance.
        </p>
        <div className="mt-5 font-semibold">Data Access Request</div>
        <p className="mt-5">
          If you would like to submit a request to access your personal
          information in accordance with applicable law, you can do so by: (i)
          clicking on this{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>link</a>,
          signing in to your account on the linked webpage, and following the
          instructions to request a copy of your personal information, or (ii)
          filling out the online Customer Care form available at this{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>link.</a>{" "}
          Please specify in your request the details you would like to know,
          including any specific pieces of personal information you would like
          to access.
        </p>
        <p>
          Please note that your right to know can be exercised without
          justification and free of charge. However, we may request a fee,
          notably when requests are unfounded, excessive, or have a repetitive
          character. We are not required to provide access to personal
          information more than twice in 12 months.
        </p>
        <div className="mt-5 font-semibold">Data Deletion Request</div>
        <p className="mt-5">
          {" "}
          If you are a <strong>Basic member</strong> (as defined in our{" "}
          <a
            href="/terms-of-service"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Terms and Conditions of Service
          </a>
          ) and have no unused virtual goods purchases reflected in your
          account, you can log into your account on our website, select Data &
          Settings, Profile Visibility and click “here” or click directly on
          this{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>link </a>to
          delete your profile and the data contained in your profile. Please
          note that this deletion on your own is only possible on our{" "}
          <a style={{ textDecoration: "underline" }}>website</a> and not in our
          apps. If you cannot log in on our Website, you need to submit a data
          deletion request using the link below.
        </p>
        <p>
          If you are a <strong>Premium member</strong> (as defined in our{" "}
          <a
            href="/terms-of-service"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            Terms and Conditions of Service
          </a>
          ) or a Basic member who has unused virtual goods purchases in your
          account, please submit a data deletion request using the link below.
        </p>
        <p>
          To submit a data deletion request, you can fill out the online form
          available at this{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>link </a>
        </p>
        <div className="mt-5 font-semibold">Data Correction Request</div>
        <p className="mt-5">
          All members may update or correct certain personal information
          directly in their account (e.g., email address, settings). Other
          personal information updates and corrections (e.g., d a t e of birth)
          must be processed by our Customer Care team for verification purposes.
          In accordance with applicable law, we may not be able to update
          personal information if we are unsuccessful in verifying your identity
          or the accuracy of such information. To request a correction/update of
          any personal information that cannot be self-updated, please contact
          our Customer Care team at this{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>link </a>
        </p>
        <div className="mt-5 font-semibold">Verification Process</div>
        <p className="mt-5">
          To protect your privacy, we must verify your identity to process your
          request for access to specific data, and to correct or to delete data.
          To do that and if you are a <strong>Basic or Premium member</strong>,
          please log in and send us your request through one of the contact
          links above. If you maintain your KJLEMON account with a unique
          KJLEMON email/password combination (rather than Facebook or Apple
          login), you may be asked to re-input your login credentials as an
          additional verification step. If you maintain your KJLEMON account
          through Facebook or Apple login, then you may be asked to verify your
          identity by providing certain information, including but not
          necessarily limited to your profile ID or email address associated
          with your account, and your service password (that is not your login
          password), date of birth, or zip/postal code associated with your
          account.
        </p>
        <p>
          {" "}
          If you request your data through the customer care form, we will
          request certain account information to verify your identity which may
          include the following: the email address associated with your profile,
          your profile ID, and your service password (that is not your login
          password), your date of birth, and/or your zip/postal code. Your
          profile ID and service password will be assigned to you when you
          register for our Service. You can access these at any time in your
          online profile on our website in the section entitled
          <span style={{ background: "yellow" }}>
            “My Data & Settings” {">"} “Manage Profile”.
          </span>{" "}
          If you cannot provide us with such information, we will ask you to
          provide other account information to verify your identity.
        </p>
        <p>
          We will make good faith efforts to provide you with access to,
          correct, or delete your data when you request it, but there may be
          circumstances in which we may not provide access to, correct, or
          delete data as allowed by law. For example, we are not required to
          correct or delete personal information needed to provide a service
          you’ve asked us to provide, to detect fraudulent or illegal activity,
          for bookkeeping or tax purposes (e.g., transaction data), if your
          identity could not be verified, or data that is required for legal
          purposes. Also, we are not required to provide access to information
          that contains legal privileges, if your identity cannot be verified,
          or where the information would compromise others’ privacy or other
          legitimate rights, like intellectual property rights. If we determine
          that your request for access, deletion, or correction should be denied
          or restricted for any reason, we will provide you with an explanation
          of why that determination has been made and a contact point for any
          further inquiries.
        </p>
        <div className="mt-5 font-semibold">Authorized Agent</div>
        <p className="mt-5">
          If you wish to designate an authorized agent to request on your
          behalf, please let us know when you make your request. You can
          designate an authorized agent to request on your behalf if: (i) the
          authorized agent is a natural person or a registered business entity,
          and (ii) you sign a written declaration that you authorize the
          authorized agent to act on your behalf.
        </p>
        <p>
          If you use an authorized agent to submit a request to exercise your
          right to know or your right to request deletion, please take the
          following steps:
        </p>
        <p>
          - Mail your written declaration authorizing the authorized agent to
          act on your behalf, certified by a California notary public, to this
          address: KJLEMON LLC : Data Request , at 26830, SUGARITE CANYON Dr,
          MORENO VALLEY, CA 92555 and,
        </p>
        <p>
          - Provide any information we request as described above and/or in our
          response to verify your identity.
        </p>
        <p>
          If you provide an authorized agent with power of attorney, we will
          respond to any request from such authorized agent without the steps
          above.
        </p>
        <div className="mt-5 font-semibold">Additional Information</div>
        <p className="mt-5">
          Any access, deletion, or correction requests that can be processed by
          us will be done within 45 days from the date we receive your request
          unless we notify you that an extension is required. In the case of an
          extended completion period, we will process your request within 90
          days from the date of your original request. If we are unable to
          satisfactorily verify your identity, we will not be able to process
          your request.
        </p>
        <p>
          You may appeal any refusal by KJLEMON to act on a request under this
          section by responding to KJLEMON’s email which includes the refusal
          language.
        </p>
        <p>
          We will not discriminate against you for exercising your rights and
          choices. Some of the functionality and features of our Services,
          however, may change or no longer be available to you.
        </p>
        <div className="mt-5 font-semibold text-2xl">
          14. Retention and Storage of Your Personal Information
        </div>
        <p className="mt-5">
          We retain your personal information for as long as necessary to
          fulfill the purpose(s) for which it was collected and to comply with
          applicable legal obligations and based on the criteria set out in this
          Privacy Policy. Except for information required for accounting or
          record-keeping purposes, we will generally delete your personal
          information automatically as follows:
        </p>
        <p>
          • For Basic Memberships (as defined in the{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>
            Agreement
          </a>
          ) we will automatically delete your personal information after 2 years
          of inactivity.
        </p>
        <p>
          {" "}
          • For Basic Memberships with unused Match Unlock purchases, we will
          retain your personal information for 2 years after the Basic
          Membership becomes inactive (i.e., after your last log-in), or at the
          latest 4 years after the date of your last Match Unlock purchase,
          whichever is earlier.
        </p>
        <p>
          {" "}
          • Premium Membership data will continue to be stored for the duration
          of the membership unless you request deletion of your profile if there
          is no statutory storage obligation that applies to that information.
          If your data is subject to a mandatory storage period, we will ensure
          that this information is isolated and stored until the expiration of
          the mandatory retention period. Once your Premium Membership is over,
          your Premium Membership will be converted into a Basic Membership. In
          this case, the description above relating to the retention period of
          Basic member data will apply.
        </p>
        <p>
          Your personal information may be processed and stored outside of the
          jurisdiction or country in which you reside by us, an affiliate, or an
          unaffiliated service provider for the purposes set out in this Privacy
          Policy and, under the laws of these other jurisdictions, in certain
          circumstances, foreign courts, law enforcement agencies or regulatory
          agencies may be entitled to access your personal information.
        </p>
        <p>
          For retention of specific categories of personal information, please
          review our Supplemental Privacy Policy.
        </p>
        <div className="mt-5 font-semibold text-2xl">
          15. Supplemental Privacy Policy.
        </div>
        <p className="mt-5">
          Section 15 of this Privacy Policy applies only to California,
          Virginia, and Colorado residents.
        </p>
        <p>
          You can find{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>
            an exhaustive list here{" "}
          </a>
          of the categories of personal information KJLEMON has collected, used,
          and/or disclosed, the business or commercial purposes for which such
          information was collected, the categories of third parties with which
          we share your personal information, and our retention periods for each
          category of personal information collected
        </p>
        <div className="mt-5 font-semibold text-2xl">
          16. Dispute Resolution
        </div>
        <p className="mt-5">
          If you have an unresolved privacy or data use concern that we have not
          addressed satisfactorily, please contact us at the address or email
          address listed above.
        </p>
        <div className="mt-5 font-semibold text-2xl"> 17. Contact Us</div>
        <div className="mt-10 font-semibold">
          Contact for More Information or Questions.
        </div>
        <p className="mt-5">
          {" "}
          If you have any questions about this section or about exercising your
          rights described above, you can contact us by mailing us at:
        </p>
        KJLEMON LLC <br />
        26830 SUGARITE CANYON Dr <br />
        MORENO VALLEY, CA 92555
        <p>
          Or you can reach us by email at:{" "}
          <a style={{ color: "blue", textDecoration: "underline" }}>
            privacy@kjlemons.com
          </a>
        </p>
        <div className="mt-5 font-semibold text-2xl">18. Effective Date</div>
        <p className="mt-5">
          Copyright © 2023 KJLEMON, LLC. All Rights Reserved. KJLEMON, and other
          marks, colors, and images are registered and common law trademarks of
          KJLEMON, Inc. Other trademarks and brands are the property of their
          respective owners.
        </p>
      </div>

      {/* fourth block */}
      <div className="flex justify-center border-t-2 items-center self-stretch px-24 py-8 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full max-md:mx-auto">
          <div className="flex gap-5 justify-between w-full text-2xl leading-7 text-center text-white whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full ">
            <img
              src="/images/lemon.png"
              alt="not found"
              className="shrink-0 max-w-full aspect-[1.09] w-[90px]"
            />
            <div className="flex gap-6 my-auto text-xl  max-lg:flex-wrap  max-md:max-w-full">
              <div className="flex flex-auto gap-5 my-auto max-md:flex-wrap cursor-pointer">
                <div className="grow my-auto">Home</div>
                <div className="my-auto">Features</div>
                <div className="flex-auto my-auto">Testimonials</div>
                <div className="flex-auto my-auto">FAQ</div>
                <div className="flex-auto my-auto">Contact</div>
              </div>
              <div className="flex gap-6 justify-between px-5 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="/images/fb.png"
                  className="shrink-0 aspect-square w-[50px]"
                />
                <img
                  loading="lazy"
                  src="/images/insta.png"
                  className="shrink-0 aspect-square w-[50px]"
                />
                <img
                  loading="lazy"
                  src="/images/x.png"
                  className="shrink-0 aspect-square w-[50px]"
                />
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-5 h-px  border-solid bg-white bg-opacity-50 border-white border-opacity-50 max-md:max-w-full" />
          <div className="flex gap-5 mt-7 w-full text-base leading-9 capitalize max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex-auto text-zinc-400 max-md:max-w-full">
              Copyright © 2024 KJ Lemon Dating App. All Rights Reserved.
            </div>
            <div className="flex gap-5 self-start text-white">
              <a href="/privacy-policy" className="flex-auto">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="flex-auto">
                Terms of Service
              </a>
              <a href="/disclaimer" className="flex-auto">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

const slide = [
  { title: "wmf SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
  { title: "wmfddf SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
  { title: "wmf56 SDNF", name: "sachin", description: "SDKNsdfnsnfsdf" },
];
