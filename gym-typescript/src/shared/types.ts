import { describe } from "node:test";

export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}
export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}