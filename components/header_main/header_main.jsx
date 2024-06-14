/** @format */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./style.css";
import useAuthProtection from "@/app/main/protectedRoute";
import { LogOut, Settings, User } from "lucide-react";
import { useLogout } from "@/lib/swr/auth";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header_main = () => {
  const { logout } = useLogout();
  useAuthProtection();
  const [account, setaccount] = useState();
  useEffect(() => {
    const storedAccount = localStorage.getItem("user");
    if (storedAccount) {
      const parsedData = JSON.parse(storedAccount);
      setaccount(parsedData);
    }
  }, []);

  const handleLogout = () => {
    const token = account?.data.token;
    console.log(token);
    logout(token ?? "");
  };

  const navigation = useRouter();

  return (
    <div className="header_main">
      <div className="left">
        <div className="logo">
          <Image
            src={"/assets/images/logo.svg"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="title flex items-center gap-2">
          <Image
            src={"/assets/images/title_.svg"}
            width={100}
            height={100}
            alt="title_"
          />
          <p>GOUVERNANCE</p>
        </div>
      </div>
      <div className="center">
        <ul>
          <p
            className="cursor-pointer"
            onClick={() => navigation.push("/main/service")}>
            Services
          </p>
          <p
            className="cursor-pointer"
            onClick={() => navigation.push("/main/profile")}>
            Profile
          </p>
          <p href="#">BLog</p>
        </ul>
        <div className="money_">
          <div>3000.00 Ar</div>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="right">
            <div className="l">
              <p>{account?.data ? account?.data.nom : "----"}</p>
              <p>{account?.data ? account?.data.prenom : "----"}</p>
            </div>
            <div className="r relative">
              <Image
                src={"/assets/images/user.svg"}
                width={60}
                height={60}
                alt="users"
              />
              <Image
                src={"/assets/images/seeting.svg"}
                width={50}
                height={60}
                alt="seeting"
                className="absolute top-0 right-0"
              />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span onClick={() => navigation.push("/main/profile")}>
                Profile
              </span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleLogout()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header_main;
