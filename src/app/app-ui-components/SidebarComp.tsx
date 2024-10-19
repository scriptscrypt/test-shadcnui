import React from 'react';
import { Calendar, Home, Inbox, Mail, FileText, Bell, ChevronDown, Users, Settings } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Nested menu items structure
const items = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Home,
  },
  {
    title: "Communication",
    icon: Mail,
    children: [
      {
        title: "Inbox",
        url: "inbox",
        icon: Inbox,
      },
      {
        title: "Messages",
        url: "messages",
        icon: Mail,
      },
      {
        title: "Notifications",
        url: "notifications",
        icon: Bell,
      }
    ]
  },
  {
    title: "Organization",
    icon: Users,
    children: [
      {
        title: "Calendar",
        url: "calendar",
        icon: Calendar,
      },
      {
        title: "Documents",
        url: "documents",
        icon: FileText,
      }
    ]
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  }
];

const MenuItem = ({ item }: any) => {
  if (item.children) {
    return (
      <Collapsible className="w-full">
        <CollapsibleTrigger className="flex w-full items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
          <div className="flex items-center gap-2">
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="ml-4 border-l pl-4 mt-1 space-y-1">
            {item.children.map((child: any) => (
              <a
                key={child.title}
                href={child.url}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
              >
                <child.icon className="h-4 w-4" />
                <span>{child.title}</span>
              </a>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <a
      href={item.url}
      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
    >
      <item.icon className="h-4 w-4" />
      <span>{item.title}</span>
    </a>
  );
};

const SidebarComp = () => {
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white p-4">
      <div className="space-y-4">
        <div className="px-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">
            Application
          </h2>
          <nav className="space-y-1">
            {items.map((item) => (
              <MenuItem key={item.title} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarComp;