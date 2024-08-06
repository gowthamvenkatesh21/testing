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
          <ul className="lg:flex pt-7 gap-5 px-5 text-2xl font-[Ultra] md:mx-14 justify-between text-center items-center  max-lg:text-lg max-lg:flex-wrap ">
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
              className={`flex md:mx-20 max-lg:items-center gap-10 text-center items-center max-xl:flex-wrap max-md:text-lg max-lg:flex-col ${open ? "" : "max-lg:hidden"
                }`}
            >
              <li

                className="flex-auto cursor-pointer "
              >
                {" "}
                <a href='/'>
                  Home
                </a>
              </li>
              <li
                className="flex-auto cursor-pointer"
              >
                <a href='/'
                >
                  Features
                </a>
              </li>
              <li
                className="flex-auto cursor-pointer "
              >
                {" "}
                <a href='/'>
                  Testimonials
                </a>
              </li>
              <li
                className="flex-auto cursor-pointer "
              >
                {" "}
                <a href='/'>
                  FAQ
                </a>
              </li>
              <li
                className="flex-auto cursor-pointer "
              >
                <a href='/'>
                  Contact
                </a>
              </li>
            </div>
            <li>
              <button
                className={`bg-[#FFCE00] text-black whitespace-nowrap py-1 max-lg:mt-9 text-xl font-sans rounded-2xl px-4 ${open ? "" : "max-lg:hidden"
                  }`}
              >
                Get Started
              </button>
            </li>
          </ul>
          <div className="flex max-lg:flex-col gap-28 pb-28 max-md:pb-14 ">
            <div className=" leading-tight md:pl-24 max-lg:px-10 max-lg:pb-10 ">
              <div className="text-white  mt-28 font-[Ultra] items-center text-[37px] ">
                Terms Of
                <span className="text-[#FFCC18] "> Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third block */}
      <div className="md:w-[85%] mx-auto max-md:px-10 py-10">
        <div className="flex justify-center font-semibold text-3xl">
          Terms Of Service{" "}
        </div>
        <div className="mt-10">
          This is a legal Contract ("Contract") between you and KJLEMON, LLC., a California corporation ("KJLEMON ", “us”, “our”, or “we”), which may be contacted at 26830 SUGARITE CANYON DR MORENO VALLEY, CA 92555. This Contract applies to the access and use of the KJLEMON website, KJLEMON .com, , including the website's mobile and online versions (the “Website”) and to the download and use of any of our applications (including iOS and Android applications) accessible in the United States (the ”Applications”), and registration to or use of any of the services provided by us through the aforementioned platforms (collectively, with the Website and Applications, each, a “Service” or the “Services”). By using any of the Services, you agree to, and are bound by, these terms and conditions of service of this Contract (including the Privacy Policy) for as long as you continue to use the Services.
        </div>
        <div className="mt-5 font-bold">
          IF YOU DO NOT AGREE TO BE BOUND BY THIS CONTRACT, DO NOT USE THE SERVICES.
        </div>
        <div className="mt-5">
          Your use of, or participation in, certain Services may be subject to additional terms, and such terms will be either listed in this Contract or will be presented to you for your acceptance when you sign up to use such Services and which are incorporated into and form part of this Contract.
        </div>
        <div className="mt-5">
          The KJLEMON provides services consist of the following, without limitation: a Service for single or married people seeking romantic relationships (the “Dating Service”). KJLEMON may offer new services or revise any of the Services, at its discretion, and this Contract will apply to all additional services or revised Services. KJLEMON also reserves the right to cease offering any of the Services.
        </div>
        <div className="mt-10 font-semibold text-2xl">
          This Contract is subject to change by KJLEMON in its sole discretion at any time. We will notify you of any such changes by posting an updated version of the Contract on this page. Your continued use of the Services after the posting of revisions to this Contract will constitute your acceptance of such revisions. Please consult the end of this Contract to determine when the Contract was last revised
        </div>
        <div className="mt-10 font-semibold text-2xl">
          1. Eligibility
        </div>
        <div className="mt-5">
          <span className="mr-1">a.</span> <span className="underline"> Minimum Age</span>. You must be at least 18 years old to register for the Services. By using the Dating Service, you represent and warrant that you are at least 18 years old or a legal age under the law of the country you are residing in, whichever is higher.
        </div>
        <div className="mt-5">
          <span className="mr-1">b.</span> <span className="underline"> Marital Status</span>. By registering to use or using the Dating Service, you will be disclosed truthfully and warrant about your marital status whether Single or Married.
        </div>
        <div className="mt-5">
          <span className="mr-1">c.</span>  <span className="underline">Criminal History</span>. By requesting to use, registering to use, and/or using the Dating Service, you represent and warrant that you have never been convicted of a felony (or other indictable offense) and/or are not required to register as a sex offender with any government entity.
        </div>


        <div className="mt-5">
          <span className="font-bold">KJLEMON DOES NOT CONDUCT CRIMINAL BACKGROUND SCREENINGS ON ITS MEMBERS.</span>  However, to the extent permissible by applicable law, KJLEMON reserves the right to conduct any criminal background checks, at any time and using available public records, to confirm your compliance with this subsection. BY AGREEING TO THESE TERMS AND CONDITIONS, YOU HEREBY AUTHORIZE ANY SUCH CHECK IF IT IS LEGALLY PERMISSIBLE IN YOUR JURISDICTION. </div>


        <div className="mt-5">
          <span className="mr-1">d.</span>  <span className="underline">Meeting Matching System Criteria</span>. By requesting to use, registering to use, and/or using the Dating Service, you represent and warrant that you have never been convicted of a felony (or other indictable offense) and/or are not required to register as a sex offender with any government entity.
        </div>


        <div className="mt-10 font-semibold text-2xl">
          2. Use of the Services.
        </div>
        <p className="my-3">As a user of any of the Services (a "Registered User"), you agree to the following :</p>
        <div className="mt-5">
          <span className="mr-1">a.</span> <span className="font-bold"> Basic Membership.</span> It is free to register for the Dating Service, which may be used by you at no cost (“Basic Membership”). Once you have registered by providing preliminary information (including email address and password), you will be asked to answer a scientifically based Compatibility Quiz which has been structured by reference to specific psychological criteria. The results of the Compatibility Quiz as well as comprehensive statistical comparative data are used by KJLEMON to automatically create your individual personality profile. Your personality profile will then be integrated into the KJLEMON database. Once in our database, your personality profile is (through an automated process) matched up to the profiles of other KJLEMON members, which enables KJLEMON to determine your compatibility with those members. Using this information, KJLEMON will send you partner recommendations (“matches”), which will appear in your online profile and be sent via email. This information will be provided to you as a condensed profile of the other compatible members, each containing a short description of a match, your compatibility score, along with your match’s primary profile photo. Please note that, as a
          Basic member, you will only be able to view blurred versions of your matches’ profile photos. However, you may be able to see an unblurred version of your matches’ primary profile photo in some instances, at our discretion. As a Basic member, you may send an unlimited number of predefined communications (for example, a smile) to your matches subject to the terms of this Contract; however, you will only have a limited ability to send and read personalized messages. Please note that we may limit the number of predefined communications that you can send if required to protect our members and to secure our Service as further set out in this Contract. As a Basic member, you will not receive a copy of your personality profile, but you may purchase a PDF copy of the personality profile at the price listed on the Service at the time of purchase.
        </div>

        <div className="mt-5">
          <span className="mr-1">b.</span> <span className="font-bold">Premium Membership.</span> The Dating Service includes a membership option that offers features not available under a Basic Membership, for which you will need to purchase a subscription (“Premium Membership”). If you purchase a Premium Membership, you will regularly receive updated matches from KJLEMON in your online profile and via email. These matches will be updated to include new members who have been added to our database since you became a Premium member. As a Premium member, you will be able to see unblurred match photos (primary and any additional photos), contact and initiate communication with matches (including video chat), conduct searches for matches based on specific criteria and respond to matches’ communications without restriction (including video chat). Please note that we may still limit the number of communications that you can send if required to protect our members and to secure our Service as further set out in this Contract. KJLEMON will also provide each Premium member his or her personality profiles as a PDF file by email.
        </div>

        <div className="mt-5">
          <span className="mr-1">c.</span> <span className="font-bold">Subscription.</span> To become a Premium member, you will be required to pay a subscription fee. All prices listed by us on the Service are offered in the displayed currency and exclude applicable taxes and duties. When purchasing a Premium Membership, you will be asked to supply certain payment information, including information regarding your billing account (e.g., via credit card, debit card, or PayPal account number). You agree that all information that you provide to us will be accurate, complete and current. You further agree that our payment processing service provider(s) may store and communicate with your financial institution via a “network token” (a unique personal identifier used only for billing purposes) to facilitate your payments. You agree to pay all valid charges incurred by you or any other user of your account (including all installment payments and/or fees, if applicable), any applicable taxes on your purchase, and/or any additional fees for the use of any payment mechanism or account connected to your KJLEMON subscription, including any processing charges relating to your subscriptions. If a
          scheduled payment using the billing account or credit or debit card associated with your subscription is attempted and declined for any reason, our payment processor will automatically reschedule the payment until the amount due is paid in full. If these attempts fail and/or the issue(s) cannot be resolved by contacting the account and/or card issuer, we will notify you via email using the email address associated with your account, and we may suspend or terminate your subscription until any outstanding payments are successfully processed. However, you acknowledge and agree that we may first attempt to obtain updated billing information, including but not necessarily limited to credit or debit card numbers and/or expiration date information from your card issuer, and that we will update this information in your account and use such information to process future payments. By subscribing, you authorize us and our payment processors to store and/or transfer your payment details and all other relevant information as needed to facilitate the processing of payments. You may select to purchase a plan in one upfront payment or in installments, if applicable. You agree and authorize us to charge you applicable sales or other related taxes to which your subscription may be subject, which is subject to change and may vary by your place of residence at the time of subscription. Installment plans may be subject to additional terms and conditions, which will be consented to at the time of purchase.
        </div>

        <div className="mt-5">
          <span className="mr-1">d.</span> <span className="font-bold">Exclusive Use.</span> Your account is for your personal use only. You may not authorize others to use your account, and you may not assign or otherwise transfer your account to any other person or entity, except if previously agreed to by us. You acknowledge that KJLEMON is not responsible for third-party access to your account that results from theft or misappropriation of your usernames and passwords.
        </div>

        <div className="mt-5">
          <span className="mr-1">e.</span> <span className="font-bold">Geographic Limitations.</span> The Services are intended for use in the United States and Canada. However, please note that KJLEMON also provides the ability to register for the Services in certain other countries, and you may search for and receive matches from members located in such countries. KJLEMON reserves the right to not provide or stop providing the Services in any jurisdiction at any time in its sole discretion. You will only use the Services in a manner consistent with this Contract and any and all applicable local, state, national and international laws and regulations, including, but not limited to, United States export control laws. By using the Services, you represent that you have not been designated by the United States government as a "Specially Designated National" or other person to whom the provisions of the Services are prohibited, and that you are not located in a country that is subject to embargo by the United States government. Registration for, and use of, the Services is void where prohibited by any such laws or regulations. You are responsible for determining whether the use of the Services is legal in your jurisdiction.
        </div>

        <div className="mt-5">
          <span className="mr-1">f.</span> <span className="font-bold">Information Submitted.</span> To the extent permitted by law, you are solely responsible for, and assume all liability regarding, (i) the information and content you contribute to the Services; (ii) the information and content you post, transmit, publish, or otherwise make available (hereinafter "post") through the Services; and (iii) your interactions with other Registered Users through the Services. You warrant and represent that all information provided to KJLEMON through our Services or otherwise will be truthful, accurate, and complete, and will be submitted only for lawful purposes.
        </div>

        <div className="mt-5">
          <span className="mr-1">g.</span> <span className="font-bold">Risk Assumption and Precautions.</span> You assume all risks when using the Services, including but not limited to all of the risks associated with any online or offline interactions with others, including dating. You agree to take all necessary precautions when meeting individuals through the Dating Service.
        </div>

        <div className="mt-5">
          <span className="mr-1">h.</span> <span className="font-bold">No Guarantees.</span> KJLEMON may not be able to provide matches for everyone seeking to use its Services. Further, KJLEMON makes no guarantees as to the number or frequency of matches through the Dating Service, or to such matches' ability, desire or criteria to communicate with any user. You understand that KJLEMON makes no guarantees, either express or implied, regarding your ultimate compatibility with individuals you meet through the Dating Service or as to the conduct of such individuals.
        </div>

        <div className="mt-5">
          <span className="mr-1">i.</span> <span className="font-bold">Reporting of Violations.</span> You will promptly report to KJLEMON by using the email report@kjlemons.com, any violation of the Contract by others, including but not limited to, Registered Users.
        </div>

        <div className="mt-5">
          <span className="mr-1">j.</span> <span className="font-bold">Content Removal.</span> KJLEMON reserves the right, but has no obligation, to monitor the information or material you submit to the Services or post in the public areas of the Services. KJLEMON will have the right to remove any such information or material that in its sole opinion violates, or may violate, any applicable law or either the letter or spirit of this Contract or upon the reasonable request of any third party. KJLEMON further reserves the right to remove matches previously delivered to you, in its reasonable discretion, in order to assure that you have quality experience on the Services.
        </div>

        <div className="mt-5">
          <span className="mr-1">k.</span> <span className="font-bold">Posting and Communication Restrictions.</span> You will not post, transmit to other users, communicate any content (or links thereto), or otherwise engage in any activity on or through the Services, that:

          <div className="ml-8 mt-2"><span className="mr-2">1.</span>promotes racism, bigotry, hatred or physical harm of any kind against any group or individual;</div>

          <div className="ml-8 mt-1"><span className="mr-2">2.</span>is intended to or tends to abuse, harass, threaten or intimidate any other users of the Services;</div>

          <div className="ml-8 mt-1"><span className="mr-2">3.</span>is defamatory, intentionally inaccurate, abusive, obscene, profane, offensive, sexually charged, obscene or otherwise objectionable or unlawful;</div>

          <div className="ml-8 mt-1"><span className="mr-2">4.</span>infringes the intellectual property right of KJLEMON  or any third party including copyright in and to content (e.g., music, movies, videos, photographs, images, software, literary works, etc.);</div>

          <div className="ml-8 mt-1"><span className="mr-2">5.</span>contains video, audio photographs, or images of another person;</div>

          <div className="ml-8 mt-1"><span className="mr-2">6.</span>promotes or enables illegal or unlawful activities, such as instructions on how to make or buy illegal weapons or drugs, violate someone's privacy, harm or harass another person, steal someone else’s identity, create or disseminate computer viruses, or circumvent copy-protect devices;</div>

          <div className="ml-8 mt-1"><span className="mr-2">7.</span>is false or misrepresentative or otherwise intended to defraud, swindle or deceive other users of the Services;</div>

          <div className="ml-8 mt-1"><span className="mr-2">8.</span>contains viruses, ransomware, spyware, adware, time bombs, trojan horses, cancelbots, worms or other harmful, or disruptive codes, components or devices;</div>

          <div className="ml-8 mt-1"><span className="mr-2">9.</span>promotes or solicits involvement in or support of a political platform, religion, cult, or sect;</div>

          <div className="ml-8 mt-1"><span className="mr-2">10.</span>disseminates another person's personal information without his or her permission, or collects or solicits another person's personal information for commercial or unlawful purposes;</div>

          <div className="ml-8 mt-1"><span className="mr-2">11.</span>is off-topic, meaningless, or otherwise intended to annoy or interfere with others' enjoyment of the Services;</div>

          <div className="ml-8 mt-1"><span className="mr-2">12.</span>impersonates, or otherwise misrepresents affiliation, connection or association with, any person or entity;</div>

          <div className="ml-8 mt-1"><span className="mr-2">13.</span>solicits gambling or engages in any gambling or similar activity;</div>

          <div className="ml-8 mt-1"><span className="mr-2">14.</span>uses scripts, bots or other automated technology to access the Services;</div>

          <div className="ml-8 mt-1"><span className="mr-2">15.</span>uses the Services for chain letter, junk mail or spam e-mails;</div>

          <div className="ml-8 mt-1"><span className="mr-2">16.</span>collects or solicits personal information about anyone under 18; or</div>

          <div className="ml-8 mt-1"><span className="mr-2">17.</span>is in any way used for or in connection with spamming, spimming, phishing, trolling, or similar activities.</div>
        </div>




        <div className="mt-5">
          <span className="mr-1">l.</span> <span className="font-bold">No False Information.</span> KJLEMON reserves the right, but has no obligation, to monitor the information or material you submit to the Services or post in the public areas of the Services. KJLEMON will have the right to remove any such information or material that in its sole opinion violates, or may violate, any applicable law or either the letter or spirit of this Contract or upon the reasonable request of any third party. KJLEMON further reserves the right to remove matches previously delivered to you, in its reasonable discretion, in order to assure that you have quality experience on the Services.
        </div>

        <div className="mt-5">
          <span className="mr-1">m.</span> <span className="font-bold">No Advertising or Commercial Solicitation.</span> You will not advertise or solicit any user to buy or sell any products or services on or through the Services. You may not transmit any chain letters, junk or spam e-mail to other users or other unsolicited commercial messages. Further, you will not use any information obtained from the Services in order to contact, advertise to, solicit, or sell to any user without their prior explicit consent. If you breach the terms of this subsection and send or post unsolicited bulk email, "spam" or other unsolicited communications of any kind through the Services, you acknowledge that you will have caused substantial harm to KJLEMON. To the extent permissible under applicable law, as a reasonable estimation of such harm, you agree to pay KJLEMON $50 USD for each such unsolicited communication you send through the Services.
        </div>

        <div className="mt-5">
          <span className="mr-1">n.</span> <span className="font-bold">Unique and Bona Fide Profile</span> As a Registered User of the Dating Service, you will create only one unique profile. In addition, your use of the Dating Service must be for bona fide relationship-seeking purposes in order to maintain the integrity of the Dating Service (for example, you may not become a Registered User solely to compile a report of compatible Dating in your area, or to write a school research paper). Not all registered users are available for matching. From time to time, KJLEMON  may create test profiles in order to monitor the operation of the Services.
        </div>

        <div className="mt-5">
          <span className="mr-1">o.</span> <span className="font-bold">No Harassment of KJLEMON Employees or Agents.</span> You will not harass, annoy, intimidate or threaten any KJLEMON employees or agents engaged in providing any portion of the Services to you.
        </div>

        <div className="mt-5">
          <span className="mr-1">p.</span> <span className="font-bold">Social Media.</span> We may provide you the option to connect your KJLEMON account to your account on some social networking websites (such as via Continue with Facebook) for the purpose of logging in, uploading information or enabling certain features on the Service. When enabling this feature, we will disclose to you the information we collect from the connected social networking website and will use such information in compliance with our Privacy Policy. By connecting your KJLEMON account to your account on any social networking website, you hereby consent to the continuous release of information about you to KJLEMON. We will not send any of your KJLEMON account information to the connected social networking website without first disclosing that to you. Each social network may further allow you to set privacy controls around your information on their system, and KJLEMON ’s collection of information will always follow such controls and permissions. This feature is subject to continuous change and improvement by us and each social networking website involved, and therefore the available features and shared information are subject to change in accordance with the terms of this Contract, and the terms of use of the relevant social networking site.
        </div>




        <div className="mt-10 font-semibold text-2xl">
          3.  Proprietary Rights.
        </div>

        <div className="mt-5">
          <span className="mr-1">a.</span> <span className="font-bold">Ownership of Proprietary Information. </span> You hereby acknowledge and agree that KJLEMON is the owner or licensee of highly valuable proprietary information accessible on or through the Services, including without limitation, the compatibility matching system, compatibility profiles, and our compatibility quiz (collectively, "Confidential Information"). KJLEMON owns and hereby retains all proprietary rights in the Services, including but not limited to, all Confidential Information.
        </div>

        <div className="mt-5">
          <span className="mr-1">b.</span> <span className="font-bold">No Use of Confidential Information. </span>You will not post, copy, modify, transmit, disclose, show in public, create any derivative works from, distribute, make commercial use of, or reproduce in any way any (i) Confidential Information or (ii) other copyrighted material, trademarks, or other proprietary information accessible via the Services, without first obtaining the prior written consent of the owner of such proprietary rights.
        </div>

        <div className="mt-5">
          <span className="mr-1">c.</span> <span className="font-bold">Other Users' Information. </span>Other Registered Users may post information which has copyright protection whether or not it is identified as copyrighted. You agree that you will not copy, modify, publish, transmit, distribute, perform, display, commercially use, or sell any KJLEMON or third-party proprietary information available via the Services.
        </div>

        <div className="mt-5">
          <span className="mr-1">d.</span> <span className="font-bold">License to Posted or Accessed Content. </span>By posting information or content to any profile pages or public area of the Services, or making it accessible to us by linking your KJLEMON account to any of your social network accounts (e.g. via Continue with Facebook) subject to applicable privacy laws as they relate to any personal information contained therein, you automatically grant, and you represent and warrant that you have the right to grant, to KJLEMON and its users, an irrevocable, perpetual, non-exclusive, fully-paid, worldwide license to use, reproduce, perform, publicly display, modify and distribute such information and content, and to prepare derivative works of, or incorporate into other works, such information and content, and to grant and authorize sub-licenses of the foregoing. From time to time, we may create, test or implement new features or programs on the Services in which you may voluntarily choose to participate or may be a part of a test group with special access, in accordance with the additional terms and conditions of such features or programs. By your participation in such features or programs, you grant us the rights and waive certain other rights stated in this subsection in connection with the additional terms and conditions (if any) of such features or programs.
        </div>


        <div className="mt-10 font-semibold text-2xl">
          4. User Information.
        </div>

        <div className="mt-5">
          <span className="mr-1">a.</span> <span className="font-bold">Privacy Statement. </span>We will only use your information in accordance with our Privacy Policy. For information about the collection, use and possible disclosure of information and material provided by you, please click on KJLEMON's Privacy Policy located on the Services. By using the Services, you are consenting to the terms of KJLEMON's Privacy Policy.
        </div>

        <div className="mt-5">
          <span className="mr-1">b.</span> <span className="font-bold">No Contact Information. </span>You agree that you will not post any full name, phone number, address, email addresses, personal website address or third-party profile page, or other contact information in the profile section of the Dating Service that will be made available to other Registered Members. You may, at your discretion, exchange such information when you reach the direct communication phase with your matches.
        </div>

        <div className="mt-5">
          <span className="mr-1">c.</span> <span className="font-bold">Disclosure By Law. </span>You acknowledge and agree that KJLEMON may disclose information you provide in accordance with our Privacy Policy, including, if required to do so by law, at the request of certain third parties, or if we, in our sole discretion, believe that disclosure is reasonable to (1) comply with the law, requests or orders from law enforcement, or any legal process (whether or not such disclosure is required by applicable law); (2) protect or defend KJLEMON's, or a third party's, rights or property; or (3) protect someone's health or safety, such as when harm or violence against any person (including the user) is threatened.
        </div>

        <div className="mt-5">
          <span className="mr-1">d.</span> <span className="font-bold">Disclosure to Protect Abuse Victims. </span>Notwithstanding any other provision of this Contract or the Privacy Policy, KJLEMON reserves the right, but has no obligation, to disclose any information that you submit to the Services, if in its sole opinion, KJLEMON suspects or has reason to suspect, that the information involves a party who may be the victim of abuse in any form. Abuse may include, without limitation, elder abuse, child abuse, spousal abuse, neglect, or domestic violence. Information, including personal information, may be disclosed to authorities that KJLEMON, in its sole discretion, deems appropriate to handle such disclosure, provided that such disclosure is pursuant to applicable law. Appropriate authorities may include, without limitation, law enforcement agencies, child protection agencies, or court officials. You hereby acknowledge and agree that KJLEMON is permitted to make such disclosure.
        </div>

        <div className="mt-5">
          <span className="mr-1">e.</span> <span className="font-bold">Use of Anonymous Information for Research. </span>As set forth in our Privacy Policy, by using the Services, you agree to allow KJLEMON to anonymously use the information from you and your experiences through the Services to continue KJLEMON's research into successful relationships and to improve the Services. This research, conducted by psychologists and behavior research scientists, may be published in academic journals. However, your responses will be anonymous, and we will not publish research containing your personal identifying information.
        </div>


        <div className="mt-10 font-semibold text-2xl">
          5. Disclaimer of Warranties and Conditions.
        </div>

        <div className="mt-5">
          <span className="mr-1">a.</span> <span className="font-bold">No Warranties or Conditions.  </span>. THIS SECTION WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW AND SUBJECT ALWAYS TO CLAUSE 7 (LIMITATION OF LIABILITY) BELOW. KJLEMON PROVIDES THE SERVICES ON AN "AS IS" AND "AS AVAILABLE" BASIS AND MAKES NO AND DISCLAIMS ALL REPRESENTATIONS, WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, COLLATERAL OR OTHERWISE WITH RESPECT TO THE SERVICES (INCLUDING ALL CONTENT AND INFORMATION CONTAINED THEREIN), INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. KJLEMON DOES NOT REPRESENT OR WARRANT THAT YOUR USE OF THE SERVICES WILL BE SECURE, UNINTERRUPTED, ALWAYS AVAILABLE, FREE OF ERRORS, VIRUSES, BUGS OR OTHER HARMFUL COMPONENTS, OR WILL MEET YOUR REQUIREMENTS, OR THAT ANY DEFECTS IN THE SERVICES WILL BE CORRECTED. KJLEMON DISCLAIMS LIABILITY FOR, AND NO REPRESENTATION, WARRANTY OR CONDITION IS MADE WITH RESPECT TO, THE CONNECTIVITY AND AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, YOU ACKNOWLEDGE AND AGREE THAT NO SOFTWARE OR WEBSITE CAN BE ENTIRELY SECURE OR FREE OF RISK OF SECURITY BREACHES OR ATTACKS BY THIRD PARTIES, AND THAT WE MAKE NO WARRANTY OR REPRESENTATION THAT OUR SERVICES WILL BE SECURE OR FREE FROM DATA BREACHES OR CYBER ATTACKS.
        </div>


        <div className="mt-10 font-semibold text-2xl">
          6.	Limitation of Liability.
        </div>

        <div className="mt-5">
          <span className="mr-1">a.</span> <span className="font-bold">Limitation of Damages and Aggregate Liability. </span> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL KJLEMON  BE LIABLE FOR ANY DAMAGES WHATSOEVER, WHETHER DIRECT, INDIRECT, GENERAL, SPECIAL, COMPENSATORY, CONSEQUENTIAL, PUNITIVE, EXEMPLARY AND/OR INCIDENTAL DAMAGES ARISING OUT OF OR RELATING TO THE USE OR INABILITY TO USE THE SERVICES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OR CORRUPTION OF DATA OR PROGRAMS, SERVICE INTERRUPTIONS AND PROCUREMENT OF SUBSTITUTE SERVICES, EVEN IF KJLEMON  KNOWS OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES WILL KJLEMON 'S AGGREGATE LIABILITY, IN ANY FORM OF ACTION WHATSOEVER IN CONNECTION WITH THIS CONTRACT OR THE USE OF THE SERVICES, EXCEED THE PRICE PAID BY YOU FOR YOUR ACCOUNT, OR, IF YOU HAVE NOT PAID KJLEMON  FOR THE USE OF ANY SERVICES, THE AMOUNT OF USD $25.00 OR ITS EQUIVALENT.
        </div>

        <div className="mt-5">
          <span className="mr-1">b.</span> <span className="font-bold">No Liability for non-KJLEMON Actions. </span> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL KJLEMON  BE LIABLE FOR ANY DAMAGES WHATSOEVER, WHETHER PUNITIVE, EXEMPLARY, DIRECT, INDIRECT, GENERAL, SPECIAL, COMPENSATORY, CONSEQUENTIAL, AND/OR INCIDENTAL, ARISING OUT OF OR RELATING TO THE CONDUCT OF YOU OR ANYONE ELSE IN CONNECTION WITH THE USE OF THE SERVICES, INCLUDING WITHOUT LIMITATION, BODILY INJURY, DEATH, EMOTIONAL DISTRESS, AND/OR ANY OTHER DAMAGES RESULTING FROM COMMUNICATIONS OR MEETINGS WITH OTHER REGISTERED USERS OF THE SERVICES. THIS INCLUDES ANY CLAIMS, LOSSES OR DAMAGES ARISING FROM THE CONDUCT OF USERS WHO HAVE REGISTERED UNDER FALSE PRETENSES OR WHO ATTEMPT TO DEFRAUD OR HARM YOU.
        </div>


        <div className="mt-5">
          <span className="mr-1">c.</span> <span className="font-bold">Information Verification.  </span> KJLEMON may but is not required to use various ways of verifying information that users have provided. However, none of those ways are perfect, and you agree that KJLEMON will have no liability to you arising from any incorrectly verified information.
        </div>

        <div className="mt-10 font-semibold text-2xl">
          7.	Indemnification.
        </div>

        <div className="mt-5">
          <span className="mr-1">a.</span>To the maximum extent permitted by law, you agree to indemnify, defend and hold harmless KJLEMON  and its affiliates and/or related entities, whether direct or indirect, current, former or future, and its and their respective current, former or future officers, directors, employees, agents, successors and assigns and related third parties (each an “Indemnified Party”), for any claims, causes of action, debts, damages, losses, costs,
          liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of any third party claim that (a) your use of or inability to use the Services, (b) any user postings made by you, (c) your violation of any terms of this Contract or your violation of any rights of a third party, or (d) your violation of any applicable laws, rules or regulations, except to the extent caused by any unlawful or negligent act or omission by KJLEMON. KJLEMON reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with KJLEMON  in asserting any available defenses. An Indemnified Party may participate in the defense by counsel of its own choosing, at its own cost and expense. You shall not settle any claim that adversely affects an Indemnified Party or imposes any obligation or liability on an Indemnified Party without the Indemnified Party’s prior written consent.
        </div>

        <div className="mt-5">
          <span className="mr-1">b.</span>TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU HEREBY RELEASE EACH INDEMNIFIED PARTY FROM ALL DAMAGES (WHETHER DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR OTHERWISE), LOSSES, LIABILITIES, COSTS AND EXPENSES OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN CONNECTION WITH DISPUTES BETWEEN YOU AND THIRD PARTIES CONCERNING THE SERVICES OR THIS CONTRACT.
        </div>

        <div className="mt-10 font-semibold text-2xl">
          8. Complaints / Law Enforcement Contact.
        </div>

        <div className="mt-5">
          To resolve a complaint regarding the Service, you should review our Frequently Asked Questions (FAQ) by clicking on the Help link located at the bottom of any page of the KJLEMON Services, or email us by clicking here. Law enforcement officials may send correspondence (such as subpoenas, court orders and warrants) to KJLEMON to our facsimile number at +951-630-5398 . All other correspondence sent to this facsimile number will be discarded.
        </div>

        <div className="mt-10 font-semibold text-2xl">
          9. Communication and Privacy.
        </div>

        <div className="mt-5">
          We may use the email address associated with your account to send you messages, including notifications of important changes to the Services, special offers, or attempts to collect on an outstanding balance. Further, we may contact you by telephone in order to communicate with you regarding the Services. If you do not want to receive certain email messages or telephone calls (including at any wireless number you may have voluntarily provided us), please refer to our Privacy Policy to review your options.
        </div>

        <div className="mt-10 font-semibold text-2xl">
          10. Term and Termination.
        </div>

        <div className="mt-5">
          This Contract will become effective upon your acceptance of the Contract by your use of the Services and will remain in effect in perpetuity unless terminated hereunder.
          Either you or KJLEMON may terminate your account at any time, for any reason or no reason, without explanation, effective upon sending written notice to the other party. KJLEMON reserves the right to immediately suspend or terminate your access to any of the Services, without notice, for any reason or no reason. We also reserve the right to remove your account information or data from our Services and any other records if your account and/or access to the Services is terminated. In the event your access to any of the Services is suspended due to a material breach of this Contract, you agree that all fees paid to KJLEMON by you are nonrefundable and that any outstanding fees (e.g., remaining installments) will become due and payable immediately. You may terminate your account by following the steps in the applicable section under "Cancellations" below, or by sending a notice of cancellation to: KJLEMON, LLC., Attn: Cancellations,_________________________. Following any termination of your Dating Service account due to a violation of our Contract, KJLEMON may, at our discretion or as required by law, send a notice thereof to other Registered Users with whom you have corresponded for the protection of our members.
        </div>


        <div className="mt-10 font-semibold text-2xl">
          11.	Cancellations & Account Holds
        </div>

        <div className="mt-5">
          <span className="mr-1">a.</span> <span className="font-bold">Cancellation At Any Time with No Refund.</span> Except as otherwise stated in this section, you may cancel your registration or subscription to any Services at any time during the term of such registration or subscription or any renewal period by accessing Data & Settings &gt; “Manage profile” &gt; Amend Subscription, clicking on the cancellation link, and providing the information requested. In such case, your subscription will terminate at the end of the subscription term for which you have paid, and you will not receive any refund for any unused days of such subscription term. If you purchase a subscription on an
          installment payment basis (such as three-part pay), cancellation will not affect your obligation to pay the total contractual amount due on your subscription and your account, credit card, or other payment method will continue to be charged the scheduled payments until the remaining balance is paid in full.
        </div>
        <div className="mt-5 font-bold">
          <span>State-specific terms.</span>
          Section 12(c) and 12(d) only apply to subscribers residing in Arizona, California, Colorado, Connecticut, Illinois, Iowa, Minnesota, New York, North Carolina, Ohio, Rhode Island and Wisconsin</div>

        <div className="mt-5">
          <span className="mr-1">b.</span> <span className="font-bold">3-Day Cancellation.</span>
          <p className="mt-3">For Premium Membership subscribers residing in Arizona, California, Colorado, Connecticut, Illinois, Iowa, Minnesota, New York, North Carolina, Ohio, and Rhode Island:</p>

          <p className="mt-3">REGARDING THE PREMIUM MEMBERSHIP, YOU, THE BUYER, MAY CANCEL THE CONTRACT, WITHOUT ANY PENALTY OR OBLIGATION, AT ANY TIME PRIOR TO MIDNIGHT OF THE THIRD BUSINESS DAY FOLLOWING THE DATE OF THIS CONTRACT, EXCLUDING SUNDAYS AND HOLIDAYS. NOTICE OF CANCELLATION NEED NOT TAKE A PARTICULAR FORM AND IS EFFECTIVE IF IT INDICATES YOUR DESIRE TO NOT BE BOUND BY THIS CONTRACT. TO CANCEL THIS CONTRACT, YOU CAN EMAIL SUBSCRIPTIONS@KJLEMON.COM OR MAIL A SIGNED AND DATED, WHICH STATES YOU, THE BUYER, ARE CANCELING THIS CONTRACT, OR WORDS OF SIMILAR EFFECT. THIS MAILED NOTICE SHALL BE SENT TO KJLEMON, INC., ATTN: CANCELLATIONS, ____________________________. PLEASE INCLUDE THE EMAIL ADDRESS ASSOCIATED WITH YOUR KJLEMON ACCOUNT IN THIS NOTICE.</p>

          <p className="mt-3">You may also communicate your desire to cancel your subscription by live chat with Customer Care. Please note, however, that live chat may not be available to all users and, due to Customer Care agents’ hours, will not be available at all times. For a Premium Membership, the day that you successfully purchased a subscription will be the date of this Contract. Any refunds under this 3-day cancellation policy will be made within 10 days after KJLEMON 's receipt of your written cancellation notice.
            Please note that KJLEMON cannot directly process refunds for purchases made through Apple via the iOS application. Please contact Apple regarding cancellation requests for subscriptions purchased through the iOS application.
          </p>
        </div>


        <div className="mt-10 font-semibold text-2xl">
          12.	Governing Law & Venue
        </div>

        <div className="mt-5">
          <p>Unless prohibited by local law, this Contract is governed by the laws of the State of California, without giving effect to any principles of conflicts of laws. Notwithstanding the foregoing, Section 15 of this Contract shall be governed by the Federal Arbitration Act. Any action to compel arbitration or challenging the enforceability or applicability of the arbitration provisions herein, must be filed in the federal or state courts of California. Any action filed in any other court shall be transferred to, or dismissed without prejudice for refiling only in, the federal or state courts of California, after removal to the appropriate federal court, if applicable, for determination by the California federal or state court as to whether the action should be stayed pending, or otherwise referred to, arbitration. Any claims that are not referred to arbitration must be adjudicated exclusively in the federal or state courts of California. For such claims, the federal and state courts of California shall have exclusive personal jurisdiction and venue over you and us, and you and we waive any objection based on inconvenient forum. If either party files suit in any court other than the federal or state courts of California, in deciding whether to transfer or dismiss the action, or otherwise give effect to this provision, the court shall apply the standard set forth in Atlantic Marine Construction Co. v. </p>
          <p>U.S. District Court for the Western District of Texas, 571 U.S. 49 (2013). The parties also agree that transfer or dismissal cannot be denied based on inconvenience to the parties, piecemeal adjudication of the claims, a risk of inconsistent findings of law or fact, the presence of other parties who are not party to these terms, or any other private or public considerations.</p>
          <p>Nothing in this Contract is intended to limit a party’s right to seek equitable relief at any time. If the Arbitration Contract (as set forth in Section 15) is held to be unenforceable, you and we agree that any claims or disputes that you or we have against each other must be resolved in the federal or state courts located in California to the extent permissible by applicable law.</p>
        </div>


        <div className="mt-10 font-semibold text-2xl">
          13. Arbitration Contract, Class Action Waiver and Jury Trial Waiver.
        </div>
        <div className="mt-5">
          <p className="mr-1">a. <strong>Purpose</strong>: This section 15 of the Contract (henceforth referred to as "Arbitration Contract") facilitates the prompt and efficient resolution of any Disputes that may arise between you and KJLEMON. Arbitration is a form of private Dispute (as defined below) resolution in which parties to a contract agree to submit their Disputes and potential Disputes to a neutral third person (called an arbitrator) for a binding decision, instead of having such Dispute(s) decided in a lawsuit, in court, by a judge or jury trial.</p>

          <p className="mt-3">Please read this Arbitration Contract carefully. It provides that all Disputes between you and KJLEMON shall be resolved by binding arbitration. <strong>Arbitration replaces the right to go to court. In the absence of this Arbitration Contract, you may otherwise have a right or opportunity to bring claims in a court, before a judge or jury, and/or to participate in or be represented in a case filed in court by others (including, but not limited to, class actions). Entering into this Arbitration Contract constitutes a waiver of your and our right to litigate claims in court and all opportunity to be heard by a judge or jury.</strong> There is no judge or jury in arbitration, and court review of an arbitration award is limited. The arbitrator must follow this Arbitration Contract and can award the same damages and relief as a court (including attorney's fees, if otherwise authorized by applicable law).</p>
          <p className="mt-3">For the purpose of this Arbitration Contract, "KJLEMON" means KJLEMON, Inc. and its parents, subsidiaries, and affiliated companies, and each of their respective officers, directors, employees, and agents. The term "Dispute" means any dispute, claim, or controversy between you and KJLEMON regarding any aspect of your relationship with KJLEMON , whether based in contract, statute, regulation, ordinance, tort (including, but not limited to, fraud, misrepresentation, fraudulent inducement, negligence, gross negligence or reckless behavior), or any other legal or equitable theory, and includes the validity, enforceability or scope of this Arbitration Contract (with the exception of the enforceability of the Class Action Waiver in this Arbitration Contract). "Dispute" is to be given the broadest possible meaning that will be enforced.</p>
          <h2 className="mt-3" style={{ textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>YOU AND KJLEMON EACH AGREE THAT, EXCEPT AS PROVIDED BELOW, ANY AND ALL DISPUTES, AS DEFINED ABOVE, WHETHER PRESENTLY IN EXISTENCE OR BASED ON ACTS OR OMISSIONS IN THE PAST OR IN THE FUTURE, WILL BE RESOLVED EXCLUSIVELY AND FINALLY BY BINDING ARBITRATION RATHER THAN IN COURT IN ACCORDANCE WITH THIS ARBITRATION CONTRACT.</h2>

          <p>b. <strong>Pre-Arbitration Dispute Resolution:</strong> For all Disputes, you and we must first give each other an opportunity to resolve the Dispute before commencing arbitration. You must commence any Dispute you have with us by mailing written notification to KJLEMON , Inc., c/o The Corporation [Address]. That written notification must include (1) your name, (2) your address, (3) your phone number, (4) your email address used to create your KJLEMON account, (5) a written description of the Dispute, (6) a description of the specific relief you seek, and (7) your personal signature. If KJLEMON does not resolve the Dispute to your satisfaction within 45 days after it receives your written notification, you may pursue your Dispute in arbitration. We must commence any Dispute we have with you by sending you a written notification to the email address used to create your KJLEMON account that includes a written description of the Dispute and a description of the specific relief we seek. If the Dispute is not resolved to our satisfaction within 45 days after you receive our written notification, we may pursue our Dispute in arbitration. Either party may communicate directly with the other in an effort to satisfy or resolve any Dispute, including by communicating any offers or demands.</p>

          <p>c. <strong>Arbitration Procedures:</strong> If this Arbitration Contract applies and the Dispute is not resolved as provided above ("Pre-Arbitration Claim Resolution") either you or KJLEMON may initiate arbitration proceedings. The American Arbitration Association ("AAA"), www.adr.org will arbitrate all Disputes, and the arbitration will be conducted before a single arbitrator. The arbitration shall be commenced as an individual arbitration and shall in no event be commenced as a representative or class arbitration.. All issues shall be for the arbitrator to decide, including the scope of this Arbitration Contract.</p>
          <p>For arbitration before the AAA, for Disputes of less than $75,000 USD, the AAA's Consumer Arbitration Rules will apply; for Disputes involving $75,000 USD or more, the AAA's Commercial Arbitration Rules will apply. In either instance, the AAA's Optional Rules For Emergency Measures Of Protection shall apply. The AAA rules are available at www.adr.org or by calling 1-800-778-7879. This Arbitration Contract governs in the event it conflicts with the applicable arbitration rules. Under no circumstances will class action procedures or rules apply to the arbitration. However, this shall not preclude the application of Section below.</p>
          <p>In the event of a Mass Filing (defined in Section 13k below), the procedures, fees, and costs described in Section 13k will govern notwithstanding any applicable rule of the arbitration provider to the contrary.</p>
          <p>Because your contract with KJLEMON, the Contract, and this Arbitration Contract concern interstate commerce, the Federal Arbitration Act ("FAA") governs the arbitrability of all Disputes. However, the arbitrator will apply applicable substantive law consistent with the FAA and the applicable statute of limitations or condition precedent to suit.</p>

          <p>d. <strong>Arbitration Award:</strong> The arbitrator may award on an individual basis any relief that would be available pursuant to applicable law and will not have the power to award relief to, against or for the benefit of any person who is not a party to the proceeding. The arbitrator shall make any award in writing but need not provide a statement of reasons unless requested by a party. Such award by the arbitrator will be final and binding on the parties, except for any right of appeal provided by the FAA, and may be entered in any court having jurisdiction over the parties for purposes of enforcement.</p>
          <p>e. <strong>Location of Arbitration:</strong> The arbitration may be heard in California, as otherwise required by the arbitration provider’s rules, or in another location mutually agreed to by the parties. The parties may appear via teleconference as though they were appearing in person unless otherwise ordered by the arbitrator</p>
          <p>f. <strong>Payment of Arbitration Fees and Costs:</strong>The initiating party must pay all filing fees that the arbitration provider requires to be paid by the initiating party. Your and our responsibility to pay other administrative and arbitrator fees and costs will also be as set forth in the applicable arbitration provider’s rules, unless the arbitrator determines the claims are frivolous. If a claim is determined to be frivolous, the claimant is responsible for reimbursing the respondent for its portion of all such administrative, hearing, filing, and/or other fees incurred as a result of the frivolous claim. The arbitration provider may also impose such obligation on the claimant’s attorneys. Fees, costs, and sanctions may also be awarded in the arbitration against  a party  of a party’s  attorney  as provided pursuant to applicable law. You may qualify for a waiver of certain arbitration costs under the arbitration provider’s rules or other applicable law. If you meet the standard for proceeding in forma pauperis in federal court, California state court, or the courts of your state of residence, cannot obtain a waiver from the arbitration provider of any filing fees you are required to pay, and the arbitration provider refuses to administer the arbitration without your payment of said fees, KJLEMON will pay the filing fees for you</p>
          <p>g. <strong>Class Action Waiver:</strong>The parties agree that the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a class or representative proceeding or claims (such as a class action, representative action, consolidated action or private attorney general action), except as set forth in Section 13k below, unless both you and KJLEMON  specifically agree in writing to do so following initiation of the arbitration. Neither you, nor any other Registered Member of KJLEMON and/or user of KJLEMON services, can be a  class representative, class member, or otherwise participate in a class, representative, consolidated or private attorney general proceeding, except as set forth in Section 13k below</p>
          <p>h. <strong>Limitation of Procedural Rights:</strong>You understand and agree that, by entering into this Arbitration Contract, you and KJLEMON are each agreeing to arbitration instead of the right to a trial before a judge or jury in a public court. In the absence of this Arbitration Contract, you and KJLEMON might otherwise have had a right or opportunity to bring Disputes in a court, before a judge or jury, and/or to participate or be represented in a case filed in court by others (including class actions). You and we give up those rights. Other rights that you or we would have if you or we went to court, such as the right to appeal and to certain types of discovery, may be more limited in arbitration. The right to appellate review of an arbitrator’s decision is much more limited than in court, and in general an arbitrator’s decision may not be appealed for errors of fact or law.</p>
          <p>i. <strong>Severability:</strong>: If any clause within this Arbitration Contract (other than the Class Action Waiver clause above and Mass Filing clause below) is found to be illegal or unenforceable, that clause will be severed from this Arbitration Contract, and the remainder of this Arbitration Contract will be given full force and effect. If the Class Action Waiver or Mass Filing clause is found to be illegal or unenforceable, then this entire Arbitration Contract
            will be unenforceable, and the Dispute will be decided by a court.
          </p>
          <p>j. <strong>Continuation:</strong>: This Arbitration Contract shall survive the termination of your contract with KJLEMON and your use of KJLEMON Services.
          </p>
          <p>k. <strong>Mass Filing:</strong>:If, at any time, 25 or more similar demands for arbitration are asserted against us or related parties by the same or coordinated counsel or entities, or if we assert 25 or more similar demands for arbitration or counterclaims against similarly situated parties, within a period of 60 days or otherwise close in proximity (“Mass Filing”), the additional protocols set forth below shall apply:
          </p>
          <p><strong>•	Acknowledgment of Mass Filing Protocols</strong>If you or we, or you or our counsel, files a demand for arbitration that fits within the definition of Mass Filing referred to above, then you and we agree that the demand for arbitration shall be subject to the additional protocols set forth in this Mass Filing subsection. If the parties disagree as to whether a series of filings fits within the definition of Mass Filing above, the arbitration provider shall resolve the disagreement. You and we also acknowledge that the adjudication of the dispute may be delayed and that any applicable statute of limitations shall be tolled from the time of filing of the demand for arbitration, and pending resolution of the bellwether proceedings.</p>
          <p><strong>•	Enforcement of Subsection</strong>A Court of competent jurisdiction located in federal or state court in California shall have the power to enforce this Contract.</p>

        </div>
        <div className="mt-10 font-semibold text-2xl">
          14.	General Provisions.
        </div>
        <div>
          <p className="mr-1">a. <strong>Right to Seek Injunction</strong>: Violation of this Contract may cause KJLEMON  irreparable harm, and therefore agree that KJLEMON  will be entitled to seek extraordinary relief in court, including but not limited to temporary restraining orders, preliminary injunctions and permanent injunctions without the necessity of posting a bond or other security, in addition to and without prejudice to any other rights or remedies that KJLEMON  may have for a breach of this Contract.</p>

          <p className="mr-1">b.	Miscellaneous. This Contract, which you accept upon registration for the Services, the  <a href="/privacy-policy" style={{ color: "blue", textDecoration: "underline" }}>Privacy Policy</a> located on the Services, and any applicable payment, renewal, additional Services terms, comprise the entire Contract between you and KJLEMON  regarding the use of this Service, superseding any prior Contracts between you and KJLEMON  related to your use of the Services (including, but not limited to, any prior versions of this Contract). The FAQ's found on the Services are for informational purposes only and are not deemed to be part of this Contract. Unless otherwise explicitly stated, the Contract will survive termination of your registration to the Services. The failure of KJLEMON to exercise or enforce any right or provision of this Contract does not constitute a waiver of such right or provision. If any provision of this Contract is held invalid, the remainder of this Contract will continue in full force and effect. The section titles in this Contract are for convenience only and have no legal or contractual effect.</p>

        </div>
        {/* 
        <div className="mt-5">
          <span className="underline">Sensitive Personal Information.</span> During the registration process and
          while updating your profile, you may provide us with personal
          information that is considered “sensitive” in your jurisdiction,
          including but not limited to, religious beliefs, ethnicity, and
          political views. This information is only used by us to provide the
          services to you. You may change or update your information by
          accessing your profile at any time or selecting the “prefer not to
          specify” option in response to any questions requesting such
          information.{" "}
        </div>
        <div className="mt-5">
          <span className="underline">Surveys.</span>  We may periodically conduct voluntary member surveys. We encourage our members to participate in such surveys because they provide us with important information regarding the improvement of our Services. You may also volunteer for certain surveys that we may offer to our users and any additional rules regarding the conduct of such surveys will be disclosed to you before your participation. We do not link the survey responses to any personal information, and all responses are anonymous.

        </div>
        <div className="mt-5">
          <span className="underline">Personal Information We Automatically Collect.</span>
          When you access or use our Services, we automatically collect information about how you access and use our Websites and Services. If you use a mobile device to access or download any of our Services, we may also collect device information (such as your mobile device ID, model, and manufacturer), operating system, and version information. We use this information in the aggregate to analyze trends, administer our Services, prevent fraud, understand how users interact with our Services, and gather demographic information to tailor our visitor’s experience of our Services, show them content that we think they might be interested in, and display the content according to their preferences. We do not share this information with third parties.

        </div>
        <div className="mt-5 font-semibold">
          The technologies we use to automatically collect data from you may include:

        </div>
        <div className="mt-5"> <span className="underline">1. Cookies & Web Tracking.</span> We use “cookies” to keep track of some types of information while you are accessing or using our Services. Cookies are very small files placed on your computer, and they allow us to count the number of visitors to our Websites and distinguish repeat visitors from new visitors. They also allow us to save user preferences and track user trends. We rely on cookies for the proper operation of our Websites; therefore if your browser is set to reject all cookies, the website will not function properly. Some cookies are automatically erased after the end of the browser session (these are “session cookies”), whereas other cookies are stored for a predetermined amount of time or permanently in your browser before they erase themselves (these are “temporary" or "permanent" cookies). While a cookie may distinguish your device, it will not name you. Almost every website uses cookie technology.
        </div>
        <div className="mt-4">
          We have listed the name of each cookie and each other web tracking mechanism, as well as the intended purpose of the cookie or other web tracking mechanism and other important information.

        </div>
        <div>
          What kind of cookies does KJLEMON use?

        </div>

        Strictly necessary cookies
        <div></div>
        <div>We use certain cookies to make sure that our Websites and our Services are easy, secure, and safe to use. Without these cookies, the Services that you have asked for (such as secure Websites and Services), would not be possible. This category of cookies includes:
          » Cookies that identify or authenticate our users to ensure that our Service is secure;
          » Cookies that temporarily store certain user entries ;
          » Cookies that store certain user preferences (such as your language choices). </div>

        <div>Analytics cookies
        </div>

        <div>
          We use analytics cookies to record usage data about our users (e.g. which users have visited which of our subpages, etc.) and to evaluate this information statistically.

        </div>
        <div>
          How can you deactivate or erase our cookies?

        </div>
        <div>
          You can deactivate cookies on your device via your browser settings; and you can erase any cookies already stored on your device at any time in your browser. Please note, however, that if you choose to deactivate or remove cookies, doing so may prevent certain features on our Websites from working properly and therefore affect your experience on our Websites. In addition, you may not be able to use all the features of our Service if you deactivate or remove cookies.

        </div>
        <div>
          2.	Web Beacons. “Web beacons” (also known as “clear gifs” and “pixel tags”) are small transparent graphic images that are often used in conjunction with cookies in order to further personalize our website for our users and to collect a limited set of information about our visitors. We may also use web beacons in email communications in order to understand the behavior of our customers.

        </div>
        <div>
          3.	Web Analytics. We collect and use statistical information about your use of our Services to make it more user-friendly, to understand our market share, to conduct other market research, and to make sure that we display relevant advertisements for you. To this end, we work with various authorized service providers; and we use analytics tools in our Services. However, these tools will not use your IP address, or (if they do), they will shorten it immediately after collection (which means that it will be less clearly linked to your device). These tools will also generate user profiles by using analytic cookies or by evaluating log files; however, these user profiles will not be linked to your real-world information and will not name you.

        </div>
        <div>
          4.	Promotional e-mails. Promotional e-mail messages we send you may contain code that enables our database to track your usage of the e-mails, including whether the e-mail was opened and what links (if any) were clicked. If you would rather not receive promotional e-mails from us, please see the section below labeled “Choice/Opt-Out.”

        </div>
        <div>
          Personal Information We Receive from Others. In addition to personal information, you provide us directly, and that we collect automatically, we also may receive personal information from:

        </div>
        <div>
          •	Fraud-detection and  credit-reference  agencies  to  correct  our  records  and  help prevent and detect fraud;
          •	Sources that are available to the public, including government entities, which we might combine with information that we collect from you directly; and
          •	A family member or someone else acting on your behalf.
        </div>
        <div>
          We encourage users to refer a friend to our Service by sending us a friend’s name and email address. We will send that person a one-time e-mail containing your name and inviting them to visit our site. This e-mail will contain a contact address to send their request if they want to unsubscribe. We will not keep information about your friend in our database after the email has been sent. If you refer a friend, you agree that you will not abuse this feature by entering the names and addresses of those who would not be interested in KJLEMON’s Services. For some of our Services, you may also give gift memberships to your friends, in which case we will use your friends’ e-mail addresses that you provide to deliver the gift.

        </div>




        <div>
          2. How and Why We Use Your Personal Information

        </div>
        <div>
          We use information that we collect about you or that you provide to us, including any personal information, to:

        </div>
        <div>
          •	Provide, improve, and secure our Services;
          •	Establish and manage user accounts, such as your “My Profile”;
          •	Display the public fields of your profile to your potential partners, including recent login date, user name, photos, videos, and other profile content;
          •	Provide customer support, troubleshoot issues, manage our Services, and respond to requests, questions, and comments;
          •	Process transactions;
          •	Communicate with you about our Services, including order confirmation, refund, and renewal processing, notifying of potential partners for our Service, Service announcements, and administrative messages;
          •	Communicate with you regarding promotions, including newsletters, new product offerings, special discounts, and event notifications. Our communications may include advertisements and other third-party promotional materials, campaigns, and tools.;
          •	Conduct market and consumer research and trend analyses;
          •	Enable posting on our blogs, forums, and other public communications;
          •	Perform   accounting,   auditing,   billing,   reconciliation,   and   collection   activities including collecting on outstanding and past due account balances;
          •	Prevent,  detect,  identify,  investigate,  and  respond  to  potential  or actual  claims, liabilities, prohibited behavior, and criminal activity;
          •	Comply with and enforce legal requirements, agreements, and policies;
          •	Achieve purposes for which we provide specific notice at the time of collection; and
          •	For any other purpose with your consent.
          One of the methods we use to communicate with you in connection with KJLEMON’s Services may be by telephone or text message (including any wireless number you may provide to us). For example, you may sign up for a text messaging service (“SMS Verification”) which enables KJLEMON to verify your phone number via a confirmed text message and display such verification in your public account (as a security measure for your potential partners’ benefit). If you would rather not receive telephone calls or text messages from us, you may change or delete your number from your account preferences page(s) or ask to be removed from our contact list if you receive a call or text message from us. If you want to opt out of the SMS Verification service, please send us an e-mail at any time. Please note that we or one of our service providers may contact you by telephone in connection with an outstanding and past-due balance on your account. Opting out of receiving telephone calls will not prevent you from receiving calls related to an outstanding balance.

          In addition to the uses outlined above, by accessing or using our Services, you agree to allow us to anonymously use the information from you and your experiences to continue our research into successful relationships. This research, conducted by psychologists and behavior research scientists, may be published in academic journals. However, all of your responses will be kept anonymous, and no personal information will be published.

        </div>

        <div>
          3. Mobile Push Notifications

        </div>
        <div>
          We will send you push notifications if you choose to receive them to receive notice of potential partners for our Service, letting you know when someone has sent you a message, or for other Service-related matters. If you wish to opt-out from receiving these types of communications, you may turn them off at the device level.

        </div>
        <div>
          4. If Information is Not Provided

        </div>
        <div>
          If you do not provide us with the personal information we request, this may limit our ability to fulfill the applicable purpose for collection and the Services we can provide you. For example, we may not be able to consider or process your payment, match you with other users, or provide a particular service you have requested.

        </div>
        <div>
          5. Disclosure of Your Personal Information

        </div>

        <div>
          In general. We may disclose the personal information we collect:
          •	With current and future organizations that are part of our network of organizations for the purposes described in this Privacy Policy, including with your consent.
          •	With affiliated and unaffiliated service providers who help us perform and deliver our Services, subject to confidentiality agreements, including customer care agents; technology assistants; service fulfillment; form processing; website management and hosting; information technology and security; email and newsletter delivery; marketing vendors; auditing; collection agencies; and credit card processing.
          •	With third parties  such  as  advertising  partners,  including  direct  partners  and advertising networks, and corporate sponsors;
          •	With the appropriate authorities if we believe disclosure is necessary and appropriate to prevent physical, financial, or other harm, injury, or loss, including to protect against fraud or credit risk.
          •	With legal, governmental, or judicial authorities as instructed or required by those authorities and applicable laws, or to a legal activity, such as in response to a subpoena or investigation of suspected illicit or illegal activities, or where we believe in good faith that users may be engaged in illicit or illegal activities, or where we are bound by contract or law to enable a network partner to comply with applicable laws;
          •	With necessary third parties in connection with, or during negotiations for, an acquisition, merger, asset sale, or other similar business transfer that involves all or substantially all of our assets or functions where personal information is transferred or shared as part of the business assets.
          •	With your consent or at your direction, such as when you choose to share information or publicly post content and reviews (for example, social media posts); and
          •	With persons of your choosing and at your discretion, should the Services you are subscribed to allow that functionality.

        </div>
        <div>
          In addition, KJLEMON may disclose personal information as follows.

        </div>
        <div>
          •	To Your Potential Partners. As an integral part of providing the KJLEMON Service, we will disclose your profile information (including, but not limited to, your last login date, whether you are currently online, and your compatibility score) to your potential partners. Photos and other profile information posted by you will be available to subscribers that are matched with you. We never share your contact information with your potential partners.

        </div>
        <div>
          •	To Protect Abuse Victims. Notwithstanding any other provision of this Privacy P o l i c y or our Terms and Conditions of Service, we reserve the right, but have no obligation, to disclose any information that you submit to the Services, if in our sole opinion, we suspect or have reason to suspect, that the information involves a party who may be the victim of abuse in any form. Abuse may include, without limitation, elder abuse, child abuse, spousal abuse, neglect, or domestic violence. Information may be disclosed to authorities that we, in our sole discretion, deem appropriate to handle such disclosure. Appropriate authorities may include, without limitation, law enforcement agencies, child protection agencies, or court officials. You hereby acknowledge and agree that we are permitted to make such a disclosure.

        </div>
        <div>

        </div>

        •	To other Locales. We process all information, including your personal information, via our servers and networks located in the United States and Germany.
        Additionally, some of our service providers may be located in other jurisdictions. By
        using our services and expressly assenting to this privacy policy, you have consented to the transfer of your personal information solely to provide you the Services for which you have registered or to which you have subscribed. We take all reasonable steps to ensure that all overseas recipients will not hold, use, or disclose your personal information inconsistent with applicable law.

        6. Third-Party Advertising
        We may use third-party advertising agencies or other service providers to serve ads on our website on behalf of KJLEMON. These companies may employ cookies or pixels to measure advertising effectiveness. Any information that these third parties collect via cookies and pixels is anonymous.

        We may also share your personal information (such as your IP address, device identifier, or hashed email address) with third-party advertising companies to allow these companies to deliver relevant advertising to you.


        We will only share your information with third parties in the ways defined in this Privacy Policy.

        7. Age Restrictions
        We only accept registrations to our Services from users who are 18 years or older (or the age of majority in applicable jurisdictions). If you believe that we may have collected any such personal information through our Services, please notify us as specified below and we will endeavor to delete that information from our systems by applicable law.

        8. Custom Audience
        We may also use advertising services provided by third-party platforms (such as social networking and other websites). For example, we may provide a hashed version of your email address or other information to help us find audiences that are likely to be interested in our Services.
        9. Security
        We store information in a combination of electronic storage facilities, paper-based files, and other records. While we cannot guarantee your personal information is completely secure at all times, we have administrative, organizational, technical, and physical security measures in place to help protect against the loss, misuse, and alteration of the information collected and processed. These measures include the use of firewalls, digital certificates, Security Socket Layer (SSL), and encryption technology during credit card transactions and administrative access to site data, as well as other proprietary security measures that are applied to all repositories and transfers of user information.

        10. “Do Not Track” Signals
        We do not process or respond to web browsers “do not track” signals or other similar transmissions that indicate a request to disable online tracking of users who use or visit our websites. You may, however, disable certain tracking as discussed above (e.g., by disabling cookies). Please consult the “Help” section of your internet browser for more information.

        11. Links to or Access from Other Sites
        You may be able to access your account or the content of your account from third-party websites, such as social networking sites (e.g., Facebook), by way of various applications. These services will authenticate your identity and provide you with the option to share certain personal information with us such as your name and email address to pre-populate our registration form. The privacy policies and practices of such sites in connection with information you disclose on such sites may differ from the practices of KJLEMON as outlined in this Privacy Policy. We are not responsible for the privacy policies or practices or the content of any other websites that may provide access to, or be linked to, or from, our Services, including that of any social networking sites. Please be aware that, should you choose to use the Facebook or Apple login feature for your KJLEMON account, you should not permit other people to use your Facebook or Apple accounts or give other persons your login information for those websites. (See also Terms & Conditions, Section 2(e) (“Exclusive Use”).)

        12. Choice/Opt-Out
        You may use the following options for removing your information from our e-mail database if you wish to opt out of receiving promotional emails.
        1.	Click on the "unsubscribe" link at the bottom of the e-mail; subscriptions@kjlemons.com or report@kjlemons.com

        2.	Send mail to the following postal address letting us know which promotional e-mails you wish to opt out of:                                                                                           KJLEMON LLC.
        26830 SUGARITE CANYON Dr
        MORENO VALLEY, CA 92555


        3.	For the KJLEMON Service, select our Help link from your account home page and search our FAQ's to find the answer you are looking for, or send us an e-mail and our Customer Care agents will be happy to assist you; or

        4.	For any Services that allow you to control which e-mails you receive, go to the Notifications page, and uncheck the undesired promotions.

        13. Right to Access, Delete, Correct/Update Your Personal Information
        KJLEMON provides users the following options to access, delete, correct/update, or delete information previously submitted to us.

        KJLEMON requires that some personal information updates (such as date of birth changes) be processed by our customer care group for verification purposes and to protect other members. In order to make such personal information updates, please contact Customer Care at  subscriptions@kjlemons.com for further assistance.

        Data Access Request

        If you would like to submit a request to access your personal information in accordance with applicable law, you can do so by: (i) clicking on this link, signing in to your account on the linked webpage, and following the instructions to request a copy of your personal information, or (ii) filling out the online Customer Care form available at this link. Please specify in your request the details you would like to know, including any specific pieces of personal information you would like to access.

        Please note that your right to know can be exercised without justification and free of charge. However, we may request a fee, notably when requests are unfounded, excessive, or have a repetitive character. We are not required to provide access to personal information more than twice in 12 months.

        Data Deletion Request

        If you are a Basic member (as defined in our Terms and Conditions) and have no unused virtual goods purchases reflected in your account, you can log into your account on our website, select Data & Settings, Profile Visibility and click “here” or click directly on this link to delete your profile and the data contained in your profile. Please note that this deletion on your own is only possible on our website and not in our apps. If you cannot log in on our Website, you need to submit a data deletion request using the link below.

        If you are a Premium member (as defined in our Terms and Conditions) or a Basic member who has unused virtual goods purchases in your account, please submit a data deletion request using the link below.

        To submit a data deletion request, you can fill out the online form available at this link.

        Data Correction Request

        All members may update or correct certain personal information directly in their account (e.g., email address, settings). Other personal information updates and corrections (e.g., d a t e of birth) must be processed by our Customer Care team for verification purposes. In accordance with applicable law, we may not be able to update personal information if we are unsuccessful in verifying your identity or the accuracy of such information. To request a correction/update of any personal information that cannot be self-updated, please contact our Customer Care team at this link.

        Verification Process

        To protect your privacy, we must verify your identity to process your request for access to specific data, and to correct or to delete data. To do that and if you are a Basic or Premium member, please log in and send us your request through one of the contact links above. If you maintain your KJLEMON account with a unique KJLEMON email/password combination (rather than Facebook or Apple login), you may be asked to re-input your login credentials as an additional verification step. If you maintain your KJLEMON account through Facebook or Apple login, then you may be asked to verify your identity by providing certain information, including but not necessarily limited to your profile ID or email address associated with your account, and your service password (that is not your login password), date of birth, or zip/postal code associated with your account. 
 
If you request your data through the customer care form, we will request certain account information to verify your identity which may include the following: the email address associated with your profile, your profile ID, and your service password (that is not your login password), your date of birth, and/or your zip/postal code. Your profile ID and service password will be assigned to you when you register for our Service. You can access these at any time in your online profile on our website in the section entitled “My Data & Settings” {'>'}` “Manage Profile”. If you cannot provide us with such information, we will ask you to provide other account information to verify your identity.

        We will make good faith efforts to provide you with access to, correct, or delete your data when you request it, but there may be circumstances in which we may not provide access to, correct, or delete data as allowed by law. For example, we are not required to correct or delete personal information needed to provide a service you’ve asked us to provide, to detect fraudulent or illegal activity, for bookkeeping or tax purposes (e.g., transaction data), if your identity could not be verified, or data that is required for legal purposes. Also, we are not required to provide access to information that contains legal privileges, if your identity cannot be verified, or where the information would compromise others’ privacy or other legitimate rights, like intellectual property rights. If we determine that your request for access, deletion, or correction should be denied or restricted for any reason, we will provide you with an explanation of why that determination has been made and a contact point for any further inquiries.

        Authorized Agent

        If you wish to designate an authorized agent to request on your behalf, please let us know when you make your request. You can designate an authorized agent to request on your behalf if: (i) the authorized agent is a natural person or a registered business entity, and (ii) you sign a written declaration that you authorize the authorized agent to act on your behalf.

        If you use an authorized agent to submit a request to exercise your right to know or your right to request deletion, please take the following steps:
        -	Mail your written declaration authorizing the authorized agent to act on your behalf, certified by a California notary public, to this address: KJLEMON LLC : Data Request , at  26830, SUGARITE CANYON Dr, MORENO VALLEY, CA 92555  and,

        -	Provide any information we request as described above and/or in our response to verify your identity.

        If you provide an authorized agent with power of attorney, we will respond to any request from such authorized agent without the steps above.


        Additional Information

        Any access, deletion, or correction requests that can be processed by us will be done within 45 days from the date we receive your request unless we notify you that an extension is required. In the case of an extended completion period, we will process your request within 90 days from the date of your original request. If we are unable to satisfactorily verify your identity, we will not be able to process your request.

        You may appeal any refusal by KJLEMON to act on a request under this section by responding to KJLEMON’s email which includes the refusal language.


        We will not discriminate against you for exercising your rights and choices. Some of the functionality and features of our Services, however, may change or no longer be available to you.
        14. Retention and Storage of Your Personal Information
        We retain your personal information for as long as necessary to fulfill the purpose(s) for which it was collected and to comply with applicable legal obligations and based on the criteria set out in this Privacy Policy. Except for information required for accounting or record-keeping purposes, we will generally delete your personal information automatically as follows:

        •	For Basic Memberships (as defined in the Agreement) we will automatically delete your personal information after 2 years of inactivity.
        •	For Basic Memberships with unused Match Unlock purchases, we will retain your personal information for 2 years after the Basic Membership becomes inactive (i.e., after your last log-in), or at the latest 4 years after the date of your last Match Unlock purchase, whichever is earlier.
        •	Premium Membership data will continue to be stored for the duration of the membership unless you request deletion of your profile if there is no statutory storage obligation that applies to that information. If your data is subject to a mandatory storage period, we will ensure that this information is isolated and stored until the expiration of the mandatory retention period. Once your Premium Membership is over, your Premium Membership will be converted into a Basic Membership. In this case, the description above relating to the retention period of Basic member data will apply.

        Your personal information may be processed and stored outside of the jurisdiction or country in which you reside by us, an affiliate, or an unaffiliated service provider for the purposes set out in this Privacy Policy and, under the laws of these other jurisdictions, in certain circumstances, foreign courts, law enforcement agencies or regulatory agencies may be entitled to access your personal information.

        For retention of specific categories of personal information, please review our Supplemental Privacy Policy.


        15. Supplemental Privacy Policy.
        Section 15 of this Privacy Policy applies only to California, Virginia, and Colorado residents.

        You can find an exhaustive list here of the categories of personal information KJLEMON has collected, used, and/or disclosed, the business or commercial purposes for which such information was collected, the categories of third parties with which we share your personal information, and our retention periods for each category of personal information collected

        16. Dispute Resolution
        If you have an unresolved privacy or data use concern that we have not addressed satisfactorily, please contact us at the address or email address listed above.


        17. Contact Us

        Contact for More Information or Questions.

        If you have any questions about this section or about exercising your rights described above, you can contact us by mailing us at:
        KJLEMON LLC
        26830 SUGARITE CANYON Dr
        MORENO VALLEY, CA 92555


        Or you can reach us by email at: privacy@kjlemons.com


        18. Effective Date

        Copyright © 2023 KJLEMON, LLC. All Rights Reserved. KJLEMON, and other marks, colors, and images are registered and common law trademarks of KJLEMON, Inc. Other trademarks and brands are the property of their respective owners. */}



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
                <div
                  className="grow my-auto"
                >
                  Home
                </div>
                <div className="my-auto">
                  Features
                </div>
                <div
                  className="flex-auto my-auto"
                >
                  Testimonials
                </div>
                <div
                  className="flex-auto my-auto"
                >
                  FAQ
                </div>
                <div
                  className="flex-auto my-auto"
                >
                  Contact
                </div>
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
              <a href='/privacy-policy' className="flex-auto">Privacy Policy</a>
              <a href='/terms-of-service' className="flex-auto">Terms of Service</a>
              <a href='/disclaimer' className="flex-auto">Disclaimer</a>
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
