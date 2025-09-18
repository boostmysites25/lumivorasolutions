import React, { lazy } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyDetails } from "../constant";
import { Link } from "react-router-dom";
import { ReactComponent as WhatsApp } from "../assets/svgs/WhatsappIcon.svg";
const WebsiteHeader = lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const WebsiteFooter = lazy(() => import("../components/website/WebsiteFooter"));
const LeadForm = lazy(() => import("../components/LeadForm"));

const MapComponent = lazy(() => import("../components/website/MapComponent"));

const ContactUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="Contact Us" />
      <div className="py-[3rem]">
        <div className="wrapper">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            <div
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-2 items-center justify-center rounded-xl p-3 min-h-[160px] w-full"
            >
              <MapPin
                strokeWidth={2}
                size={28}
                className="text-primary inline min-w-5"
              />
              <span className="text-center font-normal text-[9px] leading-tight px-2 w-full break-all">
                {companyDetails.address}
              </span>
            </div>
            <Link
              to={`mailto:${companyDetails.email}`}
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-6 min-h-[160px]"
            >
              <Mail strokeWidth={2} size={40} className="text-primary inline" />
              <span className="text-center font-medium text-sm px-2">
                {companyDetails.email}
              </span>
            </Link>
            <Link
              to={`tel:${companyDetails.phone}`}
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-6 min-h-[160px]"
            >
              <Phone
                strokeWidth={2}
                size={40}
                className="text-primary inline"
              />
              <span className="text-center font-medium text-sm px-2">
                {companyDetails.phone}
              </span>
            </Link>
            <Link
              to={`https://wa.me/${companyDetails.whatsapp.replace(/\s/g, '')}`}
              target="_blank"
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-6 min-h-[160px]"
            >
              <WhatsApp className="w-10 h-10 fill-green-500" />
              <span className="text-center font-medium text-sm px-2">
                {companyDetails.whatsapp}
              </span>
            </Link>
          </div>
          <LeadForm />
        </div>
      </div>
      <div className="mt-[3rem] relative">
        <div
          data-aos="fade-up"
          className="p-7 flex gap-2 bg-white absolute rounded-b-xl left-0 translate-x-1/2 sm:right-[2rem] sm:translate-x-0 top-0 z-10 text-black min-w-[22rem] max-w-[22rem]"
        >
          <MapPin strokeWidth={1.5} size={20} className="inline min-w-5 mt-1" />{" "}
          <span className="text-sm">{companyDetails.address}</span>
        </div>
        <MapComponent />
      </div>
      <WebsiteFooter />
    </>
  );
};

export default ContactUs;
