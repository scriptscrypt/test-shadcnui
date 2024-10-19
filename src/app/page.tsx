"use client";
import { SidebarComp } from "./app-ui-components/SidebarComp";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function Home() {

 
  return (
   <>
   <div className="flex gap-4">

   <div className="">LEFT


   <SidebarComp/>

   </div>
   
   <div className="">CENTER</div>

   <div className="">RIGHT</div>
   </div>
   </>
  );
}
