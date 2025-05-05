'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderWidget, FooterWidget, HomeSliderWidget } from "@/components/shared/general";


const Marquee = () => {

  return (
    <div className="relative p-0 mt-10 flex   justify-center w-[800px] items-center overflow-hidden "

    >
      <div className="fade-effect-left"

      ></div>

      <div className="whitespace-nowrap animate-marquee h-20 flex items-center ">

        <div className="flex space-x-10">
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="GwuMQJpzjGUV7n3q2Qpbla" x1="13.48" x2="31.634" y1="11.593" y2="37.853" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpbla)" d="M4,38V15h40v23c0,1.1-0.9,2-2,2H6C4.9,40,4,39.1,4,38z" /><path fill="#0d86ad" d="M39.5,23h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,22.776,39.776,23,39.5,23z" /><path fill="#0d86ad" d="M39.5,27h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,26.776,39.776,27,39.5,27z" /><path fill="#0d86ad" d="M39.5,31h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,30.776,39.776,31,39.5,31z" /><path fill="#0d86ad" d="M36.5,35h-10c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5v1C37,34.776,36.776,35,36.5,35z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblb" x1="4.614" x2="42.936" y1="7.741" y2="15.533" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0077d2" /><stop offset="1" stopColor="#0b59a2" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblb)" d="M44,10v5H4v-5c0-1.1,0.9-2,2-2h36C43.1,8,44,8.9,44,10z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblc" x1="16" x2="42" y1="11.5" y2="11.5" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblc)" d="M16.5,13h25c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-25c-0.276,0-0.5,0.224-0.5,0.5v2C16,12.776,16.224,13,16.5,13z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpbld" x1="6.751" x2="8.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="7.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpbld)" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpble" x1="11.751" x2="13.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="12.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpble)" /><radialGradient id="GwuMQJpzjGUV7n3q2Qpblf" cx="24.519" cy="32.852" r="8.922" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ba84f5" /><stop offset=".129" stopColor="#b584f3" /><stop offset=".291" stopColor="#a585ee" /><stop offset=".47" stopColor="#8c87e6" /><stop offset=".662" stopColor="#6889db" /><stop offset=".862" stopColor="#3b8bcd" /><stop offset="1" stopColor="#178dc2" /></radialGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblf)" d="M21.222,21H8.778C8.348,21,8,21.348,8,21.778v12.444C8,34.652,8.348,35,8.778,35h12.444C21.652,35,22,34.652,22,34.222V21.778C22,21.348,21.652,21,21.222,21z" /><path fill="#436dcd" d="M18.136,27.636c-0.447-0.447-1.168-0.457-1.627-0.022l-3.842,3.64V35h8.556C21.652,35,22,34.652,22,34.222V31.5L18.136,27.636z" /><circle cx="19" cy="24" r="1" fill="#fff" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblg" x1="14.965" x2="14.965" y1="25.718" y2="35.161" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#124787" /><stop offset=".923" stopColor="#173b75" /><stop offset="1" stopColor="#173a73" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblg)" d="M8.778,35h12.444c0.316,0,0.586-0.189,0.708-0.459l-8.46-8.46c-0.447-0.447-1.168-0.457-1.627-0.022L8,29.699v4.523C8,34.652,8.348,35,8.778,35z" /></svg>
            Smart Dashboard
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#FFFFF5">
              <path d="M16.5 5C10.159 5 5 10.159 5 16.5L5 31.5C5 37.841 10.159 43 16.5 43L31.5 43C37.841 43 43 37.841 43 31.5L43 16.5C43 10.159 37.841 5 31.5 5L16.5 5 z M 34 12C35.105 12 36 12.895 36 14C36 15.104 35.105 16 34 16C32.895 16 32 15.104 32 14C32 12.895 32.895 12 34 12 z M 24 14C29.514 14 34 18.486 34 24C34 29.514 29.514 34 24 34C18.486 34 14 29.514 14 24C14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" fill="#FFFFF5" />
            </svg>

            Sales
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7 fill-white" width="800px" height="800px" viewBox="0 0 24 24" >
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
            Expense Monitoring
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className='size-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="SqV1NW9rRsNjDR09JgNj7a" x1="16.037" x2="31.123" y1="654.802" y2="618.804" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#eba84b" /><stop offset="1" stopColor="#d97218" /></linearGradient><path fill="url(#SqV1NW9rRsNjDR09JgNj7a)" d="M40,42H8c-1.1,0-2-0.9-2-2V12h36v28C42,41.1,41.1,42,40,42z" /><path fill="#fabb62" d="M43,12H5V8c0-1.1,0.9-2,2-2h34c1.1,0,2,0.9,2,2V12z" /><polygon fill="#fdb700" points="38,28 40.329,29.307 43,29.34 44.364,31.636 46.66,33 46.693,35.671 48,38 46.693,40.329 46.66,43 44.364,44.364 43,46.66 40.329,46.693 38,48 35.671,46.693 33,46.66 31.636,44.364 29.34,43 29.307,40.329 28,38 29.307,35.671 29.34,33 31.636,31.636 33,29.34 35.671,29.307" /><linearGradient id="SqV1NW9rRsNjDR09JgNj7b" x1="31" x2="45" y1="624" y2="624" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fede00" /><stop offset="1" stopColor="#ffd000" /></linearGradient><circle cx="38" cy="38" r="7" fill="url(#SqV1NW9rRsNjDR09JgNj7b)" /></svg>
            Smart Inventory Management

          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">


            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSra" x1="28.529" x2="33.6" y1="374.529" y2="379.6" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3079d6" /><stop offset="1" stopColor="#297cd2" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSra)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z" /><path d="M39,21.602L25.101,35.504L23.868,40.4c-0.111,0.442,0.29,0.843,0.732,0.732l4.897-1.233L39,30.394V21.602z" opacity=".05" /><path d="M39,22.309L25.941,35.371l-0.547,1.017h-0.001l-0.864,3.434c-0.099,0.392,0.256,0.746,0.648,0.648l3.446-0.868l1.006-0.543L39,29.667V22.309z" opacity=".07" /><path fill="#c94f60" d="M44.781,22.141l-1.922-1.921c-0.292-0.293-0.768-0.293-1.061,0l-0.904,0.905l2.981,2.981l0.905-0.904C45.073,22.908,45.073,22.434,44.781,22.141" /><path fill="#f0f0f0" d="M26.003,36.016L25,40l3.985-1.003l0.418-3.456L26.003,36.016z" /><path fill="#edbe00" d="M41.333,26.648L28.985,38.996l-2.981-2.981l12.348-12.348L41.333,26.648z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSrb" x1="41.112" x2="41.112" y1="368.688" y2="363.199" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dedede" /><stop offset="1" stopColor="#d6d6d6" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSrb)" d="M38.349,23.667l2.543-2.544l2.983,2.981l-2.543,2.544L38.349,23.667z" /><path fill="#787878" d="M25.508,37.985L25,40l2.014-0.508L25.508,37.985z" /><polygon fill="#0d62ab" points="25,30.414 20,25.414 15.707,29.707 14.293,28.293 20,22.586 25,27.586 30.293,22.293 31.707,23.707" /><circle cx="31" cy="23" r="2" fill="#199be2" /><circle cx="25" cy="29" r="2" fill="#199be2" /><circle cx="20" cy="24" r="2" fill="#199be2" /><circle cx="15" cy="29" r="2" fill="#199be2" /></svg>
            Daily, Weekly & Monthly Reports
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#1a7ecf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M39,11v12c0,3.314-2.686,6-6,6H10.5C7.462,29,5,31.462,5,34.5v0c0,3.038,2.462,5.5,5.5,5.5H39" /><linearGradient id="4Bed96NSHh0HopGpMUAPXa" x1="37.201" x2="40.917" y1="249.501" y2="242.271" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bd4ff4" /><stop offset=".587" stopColor="#a235ec" /><stop offset="1" stopColor="#8c20e5" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXa)" d="M43,8c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S43,5.791,43,8z" /><linearGradient id="4Bed96NSHh0HopGpMUAPXb" x1="37.201" x2="40.917" y1="217.501" y2="210.271" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bd4ff4" /><stop offset=".587" stopColor="#a235ec" /><stop offset="1" stopColor="#8c20e5" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXb)" d="M43,40c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S43,37.791,43,40z" /><linearGradient id="4Bed96NSHh0HopGpMUAPXc" x1="10.223" x2="25.777" y1="246.779" y2="231.226" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d43a02" /><stop offset="1" stopColor="#b9360c" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXc)" d="M25.885,22.66C27.81,20.68,29,17.98,29,15c0-6.075-4.925-11-11-11S7,8.925,7,15c0,2.98,1.19,5.68,3.115,7.66c0.011,0.011,7.02,7.027,7.02,7.027c0.477,0.477,1.251,0.477,1.728,0C18.864,29.688,25.874,22.672,25.885,22.66z" /><radialGradient id="4Bed96NSHh0HopGpMUAPXd" cx="18" cy="239" r="5.133" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset=".177" /><stop offset="1" stopOpacity="0" /></radialGradient><circle cx="18" cy="15" r="5.133" fill="url(#4Bed96NSHh0HopGpMUAPXd)" /><circle cx="18" cy="15" r="4.4" fill="#f9f9f9" /></svg>
            Debt Tracking & Follow-ups</div>

        </div>

        <div className="flex space-x-10">
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="GwuMQJpzjGUV7n3q2Qpbla" x1="13.48" x2="31.634" y1="11.593" y2="37.853" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpbla)" d="M4,38V15h40v23c0,1.1-0.9,2-2,2H6C4.9,40,4,39.1,4,38z" /><path fill="#0d86ad" d="M39.5,23h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,22.776,39.776,23,39.5,23z" /><path fill="#0d86ad" d="M39.5,27h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,26.776,39.776,27,39.5,27z" /><path fill="#0d86ad" d="M39.5,31h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,30.776,39.776,31,39.5,31z" /><path fill="#0d86ad" d="M36.5,35h-10c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5v1C37,34.776,36.776,35,36.5,35z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblb" x1="4.614" x2="42.936" y1="7.741" y2="15.533" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0077d2" /><stop offset="1" stopColor="#0b59a2" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblb)" d="M44,10v5H4v-5c0-1.1,0.9-2,2-2h36C43.1,8,44,8.9,44,10z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblc" x1="16" x2="42" y1="11.5" y2="11.5" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblc)" d="M16.5,13h25c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-25c-0.276,0-0.5,0.224-0.5,0.5v2C16,12.776,16.224,13,16.5,13z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpbld" x1="6.751" x2="8.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="7.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpbld)" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpble" x1="11.751" x2="13.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="12.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpble)" /><radialGradient id="GwuMQJpzjGUV7n3q2Qpblf" cx="24.519" cy="32.852" r="8.922" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ba84f5" /><stop offset=".129" stopColor="#b584f3" /><stop offset=".291" stopColor="#a585ee" /><stop offset=".47" stopColor="#8c87e6" /><stop offset=".662" stopColor="#6889db" /><stop offset=".862" stopColor="#3b8bcd" /><stop offset="1" stopColor="#178dc2" /></radialGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblf)" d="M21.222,21H8.778C8.348,21,8,21.348,8,21.778v12.444C8,34.652,8.348,35,8.778,35h12.444C21.652,35,22,34.652,22,34.222V21.778C22,21.348,21.652,21,21.222,21z" /><path fill="#436dcd" d="M18.136,27.636c-0.447-0.447-1.168-0.457-1.627-0.022l-3.842,3.64V35h8.556C21.652,35,22,34.652,22,34.222V31.5L18.136,27.636z" /><circle cx="19" cy="24" r="1" fill="#fff" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblg" x1="14.965" x2="14.965" y1="25.718" y2="35.161" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#124787" /><stop offset=".923" stopColor="#173b75" /><stop offset="1" stopColor="#173a73" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblg)" d="M8.778,35h12.444c0.316,0,0.586-0.189,0.708-0.459l-8.46-8.46c-0.447-0.447-1.168-0.457-1.627-0.022L8,29.699v4.523C8,34.652,8.348,35,8.778,35z" /></svg>
            Smart Dashboard
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#FFFFF5">
              <path d="M16.5 5C10.159 5 5 10.159 5 16.5L5 31.5C5 37.841 10.159 43 16.5 43L31.5 43C37.841 43 43 37.841 43 31.5L43 16.5C43 10.159 37.841 5 31.5 5L16.5 5 z M 34 12C35.105 12 36 12.895 36 14C36 15.104 35.105 16 34 16C32.895 16 32 15.104 32 14C32 12.895 32.895 12 34 12 z M 24 14C29.514 14 34 18.486 34 24C34 29.514 29.514 34 24 34C18.486 34 14 29.514 14 24C14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" fill="#FFFFF5" />
            </svg>

            Sales
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7 fill-white" width="800px" height="800px" viewBox="0 0 24 24" >
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
            Expense Monitoring
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className='size-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="SqV1NW9rRsNjDR09JgNj7a" x1="16.037" x2="31.123" y1="654.802" y2="618.804" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#eba84b" /><stop offset="1" stopColor="#d97218" /></linearGradient><path fill="url(#SqV1NW9rRsNjDR09JgNj7a)" d="M40,42H8c-1.1,0-2-0.9-2-2V12h36v28C42,41.1,41.1,42,40,42z" /><path fill="#fabb62" d="M43,12H5V8c0-1.1,0.9-2,2-2h34c1.1,0,2,0.9,2,2V12z" /><polygon fill="#fdb700" points="38,28 40.329,29.307 43,29.34 44.364,31.636 46.66,33 46.693,35.671 48,38 46.693,40.329 46.66,43 44.364,44.364 43,46.66 40.329,46.693 38,48 35.671,46.693 33,46.66 31.636,44.364 29.34,43 29.307,40.329 28,38 29.307,35.671 29.34,33 31.636,31.636 33,29.34 35.671,29.307" /><linearGradient id="SqV1NW9rRsNjDR09JgNj7b" x1="31" x2="45" y1="624" y2="624" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fede00" /><stop offset="1" stopColor="#ffd000" /></linearGradient><circle cx="38" cy="38" r="7" fill="url(#SqV1NW9rRsNjDR09JgNj7b)" /></svg>
            Smart Inventory Management

          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">


            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSra" x1="28.529" x2="33.6" y1="374.529" y2="379.6" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3079d6" /><stop offset="1" stopColor="#297cd2" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSra)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z" /><path d="M39,21.602L25.101,35.504L23.868,40.4c-0.111,0.442,0.29,0.843,0.732,0.732l4.897-1.233L39,30.394V21.602z" opacity=".05" /><path d="M39,22.309L25.941,35.371l-0.547,1.017h-0.001l-0.864,3.434c-0.099,0.392,0.256,0.746,0.648,0.648l3.446-0.868l1.006-0.543L39,29.667V22.309z" opacity=".07" /><path fill="#c94f60" d="M44.781,22.141l-1.922-1.921c-0.292-0.293-0.768-0.293-1.061,0l-0.904,0.905l2.981,2.981l0.905-0.904C45.073,22.908,45.073,22.434,44.781,22.141" /><path fill="#f0f0f0" d="M26.003,36.016L25,40l3.985-1.003l0.418-3.456L26.003,36.016z" /><path fill="#edbe00" d="M41.333,26.648L28.985,38.996l-2.981-2.981l12.348-12.348L41.333,26.648z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSrb" x1="41.112" x2="41.112" y1="368.688" y2="363.199" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dedede" /><stop offset="1" stopColor="#d6d6d6" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSrb)" d="M38.349,23.667l2.543-2.544l2.983,2.981l-2.543,2.544L38.349,23.667z" /><path fill="#787878" d="M25.508,37.985L25,40l2.014-0.508L25.508,37.985z" /><polygon fill="#0d62ab" points="25,30.414 20,25.414 15.707,29.707 14.293,28.293 20,22.586 25,27.586 30.293,22.293 31.707,23.707" /><circle cx="31" cy="23" r="2" fill="#199be2" /><circle cx="25" cy="29" r="2" fill="#199be2" /><circle cx="20" cy="24" r="2" fill="#199be2" /><circle cx="15" cy="29" r="2" fill="#199be2" /></svg>
            Daily, Weekly & Monthly Reports
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-white bg-gradient-to-r from-akauntme-2 to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#1a7ecf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M39,11v12c0,3.314-2.686,6-6,6H10.5C7.462,29,5,31.462,5,34.5v0c0,3.038,2.462,5.5,5.5,5.5H39" /><linearGradient id="4Bed96NSHh0HopGpMUAPXa" x1="37.201" x2="40.917" y1="249.501" y2="242.271" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bd4ff4" /><stop offset=".587" stopColor="#a235ec" /><stop offset="1" stopColor="#8c20e5" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXa)" d="M43,8c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S43,5.791,43,8z" /><linearGradient id="4Bed96NSHh0HopGpMUAPXb" x1="37.201" x2="40.917" y1="217.501" y2="210.271" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bd4ff4" /><stop offset=".587" stopColor="#a235ec" /><stop offset="1" stopColor="#8c20e5" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXb)" d="M43,40c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S43,37.791,43,40z" /><linearGradient id="4Bed96NSHh0HopGpMUAPXc" x1="10.223" x2="25.777" y1="246.779" y2="231.226" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d43a02" /><stop offset="1" stopColor="#b9360c" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXc)" d="M25.885,22.66C27.81,20.68,29,17.98,29,15c0-6.075-4.925-11-11-11S7,8.925,7,15c0,2.98,1.19,5.68,3.115,7.66c0.011,0.011,7.02,7.027,7.02,7.027c0.477,0.477,1.251,0.477,1.728,0C18.864,29.688,25.874,22.672,25.885,22.66z" /><radialGradient id="4Bed96NSHh0HopGpMUAPXd" cx="18" cy="239" r="5.133" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset=".177" /><stop offset="1" stopOpacity="0" /></radialGradient><circle cx="18" cy="15" r="5.133" fill="url(#4Bed96NSHh0HopGpMUAPXd)" /><circle cx="18" cy="15" r="4.4" fill="#f9f9f9" /></svg>
            Debt Tracking & Follow-ups</div>
        </div>
      </div>
      <div className="fade-effect-right" ></div>

    </div>
  )
}


export default function Home() {
  const [videoPopup, showVideoPopup] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-y-auto");
  }, [])




  return (
    <>
      <main className="font-(family-name:--Canva-Sans)">
        <div className='shadow-md h-auto lg:h-screen bg-gradient-to-r from-akauntme-2 via-akauntme to-blue-600'>
          {/* <div
            style={{
              bottom: "calc(100% - min(var(--viewport-height, 100%), 100%) - .5px)",
              flex: "none",
              left: 0,
              order: 1008,
              pointerEvents: "none",
              position: "fixed",
              right: 0,
              top: 0,
              zIndex: 10,
            }}
          >

            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "200px",
                backgroundRepeat: "repeat",
                backgroundImage: "url('/images/grainy-noise.png')",
                opacity: 0.06,
                borderRadius: 0,
              }}
            ></div>
          </div> */}

          <HeaderWidget />

          <div className='pt-1 -z-[10] w-full flex flex-col justify-center items-center'
            style={{
              width: "100%",
              height: "100%",
              backgroundPosition: "center",
              backgroundSize: "container",
              backgroundRepeat: "no-repeat",
              backgroundImage: "url('/images/oscillate.svg')",
              borderRadius: 0,
            }}
          >


            <div className="absolute top-10 right-10 lg:right-20">
              <svg width="61" height="40" viewBox="0 0 61 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-akauntme-2" d="M55.345 23.2081C54.37 22.7911 53.914 21.6581 54.331 20.6821C54.752 19.7021 55.881 19.2511 56.862 19.6721C57.837 20.0891 58.293 21.2221 57.876 22.1971C57.84 22.2731 57.807 22.3421 57.768 22.4091C57.287 23.2371 56.247 23.5981 55.345 23.2081Z" />
                <path className="fill-akauntme-deep" d="M49.1931 33.733C48.3661 34.404 47.154 34.279 46.483 33.452C45.809 32.631 45.9341 31.419 46.7551 30.745C47.5821 30.075 48.7941 30.199 49.4681 31.02C49.9861 31.662 50.0301 32.534 49.6401 33.205C49.5281 33.4 49.3781 33.581 49.1931 33.733Z" />
                <path className="fill-akauntme-2" d="M58.442 10.028C57.384 10.112 56.455 9.32098 56.366 8.25898C56.282 7.20098 57.0729 6.27198 58.1309 6.18798C59.1919 6.09898 60.121 6.88998 60.21 7.95098C60.239 8.36098 60.143 8.74398 59.953 9.07098C59.648 9.59998 59.096 9.97698 58.442 10.028Z" />
                <path className="fill-akauntme-deep" d="M36.1451 39.9C35.0991 40.117 34.083 39.438 33.868 38.401C33.657 37.358 34.33 36.338 35.373 36.127C36.416 35.916 37.435 36.589 37.647 37.632C37.747 38.113 37.657 38.588 37.428 38.982C37.16 39.443 36.7071 39.788 36.1451 39.9Z" />
                <path className="fill-akauntme-2" d="M21.718 39.322C20.699 39.02 20.109 37.95 20.411 36.931C20.705 35.914 21.774 35.324 22.796 35.621C23.813 35.914 24.4 36.989 24.106 38.007C24.062 38.159 23.998 38.308 23.921 38.441C23.49 39.185 22.583 39.572 21.718 39.322Z" />
                <path className="fill-akauntme-deep" d="M11.945 32.041C11.21 32.81 9.99105 32.837 9.22305 32.102C8.45505 31.367 8.43004 30.143 9.16604 29.374C9.90104 28.606 11.122 28.587 11.89 29.322C12.544 29.947 12.659 30.926 12.224 31.675C12.146 31.809 12.055 31.927 11.945 32.041Z" />
                <path className="fill-akauntme-2" d="M3.94592 21.114C2.93592 21.448 1.84791 20.906 1.51391 19.895C1.17091 18.887 1.72193 17.797 2.72693 17.459C3.73693 17.125 4.82496 17.667 5.16796 18.675C5.34696 19.224 5.27091 19.789 5.00091 20.256C4.77491 20.645 4.40692 20.959 3.94592 21.114Z" />
                <path className="fill-akauntme-deep" d="M1.928 7.71901C0.877004 7.54701 0.165024 6.56201 0.336024 5.51201C0.508024 4.46101 1.49302 3.74901 2.54702 3.91501C3.59802 4.08701 4.307 5.07701 4.139 6.12201C4.101 6.36701 4.018 6.58601 3.902 6.78601C3.515 7.45301 2.743 7.85001 1.928 7.71901Z" />
                <path className="fill-akauntme-2" d="M50.758 20.866C49.959 20.529 49.586 19.599 49.932 18.798C50.275 18.002 51.204 17.629 52 17.971C52.801 18.317 53.169 19.243 52.826 20.039C52.805 20.101 52.773 20.157 52.74 20.212C52.348 20.89 51.501 21.186 50.758 20.866Z" />
                <path className="fill-akauntme-deep" d="M45.7241 29.479C45.0481 30.029 44.0531 29.927 43.5121 29.249C42.9581 28.579 43.0601 27.584 43.7361 27.034C44.4121 26.483 45.4071 26.586 45.9521 27.258C46.3791 27.788 46.4131 28.498 46.0941 29.047C46.0001 29.208 45.8791 29.353 45.7241 29.479Z" />
                <path className="fill-akauntme-2" d="M53.2961 10.085C52.4261 10.152 51.6661 9.50296 51.5971 8.63896C51.5301 7.76896 52.1761 7.01496 53.0431 6.93996C53.9071 6.86996 54.6721 7.52196 54.7421 8.38596C54.7651 8.71796 54.6851 9.03496 54.5301 9.30196C54.2781 9.73496 53.8281 10.038 53.2961 10.085Z" />
                <path className="fill-akauntme-deep" d="M35.0471 34.528C34.1961 34.703 33.3651 34.153 33.1931 33.297C33.0191 32.446 33.5681 31.615 34.4191 31.44C35.2701 31.266 36.1011 31.815 36.2811 32.669C36.3571 33.062 36.2871 33.452 36.1001 33.774C35.8811 34.151 35.5101 34.433 35.0471 34.528Z" />
                <path className="fill-akauntme-2" d="M23.248 34.05C22.409 33.808 21.931 32.93 22.175 32.099C22.417 31.26 23.2901 30.779 24.1291 31.021C24.9601 31.266 25.446 32.141 25.198 32.977C25.161 33.104 25.111 33.216 25.047 33.327C24.693 33.939 23.96 34.256 23.248 34.05Z" />
                <path className="fill-akauntme-deep" d="M15.251 28.096C14.648 28.726 13.649 28.747 13.022 28.139C13.022 28.139 13.022 28.139 13.019 28.145C12.398 27.54 12.3741 26.546 12.9761 25.916C13.5791 25.286 14.5751 25.27 15.2081 25.868C15.7391 26.384 15.8341 27.181 15.4761 27.797C15.4151 27.902 15.339 28.007 15.251 28.096Z" />
                <path className="fill-akauntme-2" d="M8.70392 19.155C7.88092 19.435 6.98597 18.982 6.71497 18.157C6.43497 17.334 6.87891 16.441 7.70691 16.165C8.53591 15.889 9.42496 16.338 9.70496 17.161C9.85196 17.61 9.78895 18.078 9.56995 18.456C9.38695 18.771 9.08392 19.026 8.70392 19.155Z" />
                <path className="fill-akauntme-deep" d="M7.05602 8.19404C6.19902 8.06004 5.61599 7.24704 5.74999 6.39004C5.89299 5.53004 6.69999 4.94504 7.55999 5.08704C8.41799 5.22104 9.00002 6.03404 8.86602 6.89104C8.83402 7.08804 8.76502 7.27004 8.67102 7.43104C8.35202 7.98104 7.71902 8.30404 7.05602 8.19404Z" />
                <path className="fill-akauntme-2" d="M46.841 18.868C46.194 18.589 45.892 17.843 46.171 17.196C46.45 16.549 47.2 16.242 47.852 16.524C48.494 16.8 48.797 17.555 48.519 18.202C48.499 18.25 48.473 18.294 48.447 18.338C48.129 18.888 47.441 19.127 46.841 18.868Z" />
                <path className="fill-akauntme-deep" d="M42.763 25.846C42.214 26.292 41.412 26.205 40.971 25.66C40.525 25.112 40.604 24.311 41.152 23.865C41.701 23.419 42.503 23.506 42.947 24.046C43.295 24.47 43.322 25.05 43.064 25.494C42.987 25.627 42.887 25.747 42.763 25.846Z" />
                <path className="fill-akauntme-2" d="M48.8979 10.131C48.1899 10.187 47.5809 9.66301 47.5209 8.96101C47.4669 8.26101 47.9879 7.64401 48.6909 7.58401C49.3959 7.53301 50.0139 8.05501 50.0679 8.75401C50.0879 9.02601 50.024 9.27701 49.895 9.50001C49.692 9.84901 49.3309 10.1 48.8979 10.131Z" />
                <path className="fill-akauntme-2" d="M34.1121 29.933C33.4211 30.074 32.7501 29.633 32.6091 28.942C32.4681 28.251 32.9131 27.574 33.6031 27.433C34.2931 27.292 34.9711 27.736 35.1121 28.427C35.1731 28.745 35.1161 29.06 34.9641 29.321C34.7871 29.627 34.4881 29.862 34.1121 29.933Z" />
                <path className="fill-akauntme-deep" d="M46.654 1.43694C46.058 1.81094 45.269 1.63494 44.893 1.03094C44.519 0.434941 44.7 -0.350059 45.296 -0.724059C45.892 -1.09806 46.68 -0.923059 47.054 -0.327059C47.316 0.0909413 47.31 0.599941 47.078 0.999941C46.978 1.17194 46.834 1.31794 46.654 1.43694Z" />
                <path className="fill-akauntme-2" d="M24.555 29.5459C23.874 29.3509 23.484 28.6419 23.684 27.9639C23.881 27.2919 24.59 26.9019 25.266 27.0929C25.944 27.2929 26.334 28.0019 26.134 28.6799C26.105 28.7819 26.064 28.8769 26.016 28.9599C25.725 29.4609 25.131 29.7169 24.555 29.5459Z" />
                <path className="fill-akauntme-deep" d="M18.0751 24.725C17.5861 25.236 16.777 25.249 16.272 24.763C15.762 24.274 15.745 23.47 16.229 22.957C16.724 22.45 17.5271 22.434 18.0381 22.923C18.4721 23.339 18.5501 23.985 18.2601 24.485C18.2111 24.567 18.1481 24.649 18.0751 24.725Z" />
                <path className="fill-akauntme-2" d="M12.773 17.4769C12.1 17.7029 11.38 17.3449 11.16 16.6749C10.934 16.0019 11.292 15.2819 11.965 15.0569C12.634 14.8369 13.354 15.1949 13.58 15.8679C13.699 16.2259 13.649 16.6059 13.472 16.9109C13.321 17.1719 13.081 17.3819 12.773 17.4769Z" />
                <path className="fill-akauntme-deep" d="M11.435 8.60395C10.737 8.48895 10.266 7.82995 10.378 7.13695C10.494 6.43895 11.147 5.96495 11.845 6.08095C12.537 6.19295 13.011 6.84695 12.901 7.54695C12.877 7.70395 12.8221 7.84995 12.7441 7.98295C12.4871 8.42795 11.973 8.68595 11.435 8.60395Z" />
                <path className="fill-akauntme-2" d="M16.1721 -0.137037C15.7491 0.425963 14.9471 0.540963 14.3811 0.122963C13.8181 -0.300037 13.7031 -1.10104 14.1271 -1.66504C14.5451 -2.23204 15.3461 -2.34604 15.9151 -1.91904C16.4401 -1.53304 16.5741 -0.817037 16.2521 -0.261037C16.2261 -0.216037 16.2031 -0.178037 16.1721 -0.137037Z" />
              </svg>


            </div>

            <div className=" w-full mx-2 md:mx-auto lg:mx-6 px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 mt-10 lg:mt-30 rounded-3xl md:rounded-[2rem]" >
              <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[50px] 
                        text-white">
                <div className="lg:leading-18">
                  <span className="italic">Akaunting </span> made easy for your Business
                </div>
              </h1>
              <p className="my-5 text-white italic text-xl md:text-[1.2rem]">
                From Chaos to Clarity — Akauntme.
              </p>
              <div className="lg:mt-10 flex justify-center gap-x-6 " >
                <Link className="group text-sm lg:text-xl inline-flex shadow-md hover:scale-[.97] transition-transform items-center justify-center rounded-2xl py-2 md:py-3 px-7
                            focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white 
                              hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                  color="slate" href="/register">
                  <span className="bg-gradient-to-r bg-clip-text from-indigo-600 to-blue-500 text-transparent">
                    Get Started.
                  </span>
                </Link>

                {/* <button className="group text-xs sm:text-base lg:text-xl inline-flex shadow-md hover:translate-y-0.5 transition-transform ring-1 items-center justify-center rounded-full py-2 
                md:py-3 px-7   cursor-pointer
                            focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 bg-white hover:ring-slate-300 
                            active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
                  color="slate" onClick={() => showVideoPopup(!videoPopup)}>
                  <svg className="h-3 w-3 flex-none fill-akauntme-deep group-active:fill-current">
                    <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
                  </svg>
                  <span className="ml-3  text-akauntme-deep">See how?</span>
                </button> */}

              </div>

              <HomeSliderWidget />
            </div>

            <motion.div
              animate={videoPopup ? "open" : "closed"}
              style={{ opacity: 0 }}
              variants={{
                open: {
                  opacity: 1,
                  x: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.3,
                    delay: 0.2,
                  }
                },
                closed: {
                  opacity: 0,
                  x: 0,
                  scale: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.3,
                  }
                }
              }}
              className='fixed shadow-md w-full shadow-akauntme-deep z-[3000] top-40 mx-4 max-w-[700px] min-h-[400px] p-3 bg-white rounded-lg'>
              <button onClick={() => showVideoPopup(!videoPopup)} className='absolute -top-4 -right-2 rounded-full size-10  border-2 border-transparent hover:border-white transition-all bg-gradient-to-tr from-blue-600 to-akauntme-2 hover:bg-akauntme-deep text-white text-2xl'>
                &times;
              </button>
              {/* <video  className='w-full'></video> */}
            </motion.div>
          </div>

        </div>

        <div className="h-[70vh] lg:h-screen bg-white mt-[2rem] lg:mt-[5rem]">
          <div className="flex justify-center items-center">
            <h1 className="text-center text-transparent font-semibold bg-gradient-to-tl from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-2xl md:text-3xl lg:text-7xl my-10 lg:my-14 max-w-[400px] lg:max-w-5xl">Try it out and see the ease to scale your business</h1>
          </div>

          <div className="w-full flex justify-center">
            <Image src="/images/preview-template.png" className="lg:rounded-3xl lg:h-full" priority alt="Dashboard Image" width={1000} height={1000} />
          </div>

        </div>

        <div className="bg-gradient-to-tr from-akauntme via-akauntme-deep to-akauntme-2 h-screen z-[5] relative">
          <div className="pt-[100px] lg:pt-[200px] flex justify-center flex-col items-center ">
            <div className="">
              <button className="relative px-6 py-2 rounded-full bg-gradient-to-r 
          from-akauntme-2 via-akauntme-2 to-blue-600
             text-white font-bold shadow-lg hover:shadow-xl 
             backdrop-filter backdrop-blur-lg bg-opacity-30 
             border border-white/20">
                Get Started
              </button>
            </div>


            <h1 className="font-(family-name:--Canva-Sans-Display)  mt-10 text-2xl md:text-3xl text-white lg:text-5xl lg:w-[700px] font-semibold lg:tracking-wide text-center leading-10 lg:leading-[3rem]">
              The modern accounting platform for your business
            </h1>
            <p className="mt-10 mx-10 font-normal text-white lg:w-[900px]  text-center lg:text-2xl">
              We&apos;re eliminating the friction and bias of traditional financing, making business owners to smartly keep track of their business inventories with ease.
            </p>

          </div>

          <div className="mt-10 lg:mt-14 flex justify-center items-center">
            <Marquee />
          </div>
        </div>

        <div className="bg-white h-screen">
          <div className="pt-[100px] lg:pt-[200px] text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-akauntme-2 to-blue-600">Faster. Smarter . Easier</h1>
            <p className="mt-10 w-auto sm:w-[530px] md:w-[500px] lg:w-[700px] lg:leading-7 text-sm sm:text-base md:text-xl lg:text-2xl text-blue-950">
              Use any of your social media login integration, lower user friction, and facilitate more transactions.
            </p>

            <div className="mt-20 mx-5 lg:mx-30 lg:px-20 relative px-6 py-2 rounded-xl bg-gradient-to-r 
          from-akauntme to-akauntme-2 h-[50vh] lg:h-[60vh]
             text-white shadow-lg hover:shadow-xl gap-y-10 lg:gap-y-0
             backdrop-filter backdrop-blur-lg bg-opacity-30 
             border border-white/20 flex flex-col lg:flex-row  justify-center items-center">
              <div className="w-full lg:w-6/12">
                <h1 className="text-center text-2xl md:text-3xl">Optimized for ease of use</h1>
                <p className="text-center md:text-left mt-5 md:mt-10 lg:w-[420px] lg:leading-6 font-light md:leading-10">
                  Akauntme was designed with focus on user-friendly and security of your business data, the system
                  employs robust double layer encryption protocols, regular security updates,and advanced authentication
                  measures to ensure a highly secure environment.
                </p>

              </div>
              <div className="w-full hidden lg:block lg:w-6/12">
                <div className="lg:w-[420px] bg-red-600 h-full">

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-tr from-akauntme via-akauntme-deep to-akauntme-2 h-[70vh] lg:mt-[300px] font-(family-name:--Canva-Sans)">
          <div className="mx-5 lg:mx-30 lg:px-20 text-center flex justify-center items-center pt-20">
            <div className="flex  flex-col justify-center items-center gap-y-10">
              <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-white lg:w-[800px]">
                More than just a bookkeepping platform for business
              </h1>
              <p className="text-white lg:w-[600px] text-base md:text-xl lg:leading-7">
                It goes beyond just a bookkeepping secure service for your business, offering a multifaceted solution with additional
                features and functionalities to enhance overall business performance.
              </p>
              <div>
                <Link href="/learn" className="block relative px-6 py-2 rounded-full bg-gradient-to-r 
from-akauntme-2 via-akauntme-2 to-blue-600
text-white font-sembold shadow-lg hover:shadow-xl 
backdrop-filter backdrop-blur-lg bg-opacity-30 
border border-white/20 tracking-wider">
                  Learn more

                  {/* <svg className="size-7 -top-2 right-0 absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="eTt4_F5~sRFQTjUQtW5_ya" x1="7.4" x2="11.6" y1="36.724" y2="43.192" gradientTransform="rotate(45.001 9 39)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a" /><stop offset=".443" stopColor="#ee3d4a" /><stop offset="1" stopColor="#e52030" /></linearGradient><path fill="url(#eTt4_F5~sRFQTjUQtW5_ya)" d="M11.121,41.121c-1.172,1.172-6.243,2-6.243,2s0.828-5.071,2-6.243c1.172-1.172,3.071-1.172,4.243,0C12.293,38.05,12.293,39.95,11.121,41.121z" /><linearGradient id="eTt4_F5~sRFQTjUQtW5_yb" x1="7.043" x2="9.8" y1="40.957" y2="38.2" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffcf7b" /><stop offset=".195" stopColor="#fecd76" /><stop offset=".439" stopColor="#fac666" /><stop offset=".71" stopColor="#f3bc4d" /><stop offset=".997" stopColor="#eaad29" /><stop offset="1" stopColor="#eaad29" /></linearGradient><path fill="url(#eTt4_F5~sRFQTjUQtW5_yb)" d="M10.121,40C9.536,40.586,7,41,7,41s0.414-2.536,1-3.121c0.586-0.586,1.536-0.586,2.121,0C10.707,38.464,10.707,39.414,10.121,40z" /><path fill="#199be2" d="M12.066,38.707l-2.773-2.773c-0.352-0.352-0.391-0.909-0.093-1.307l2.48-3.306l5,5l-3.306,2.48C12.975,39.099,12.418,39.059,12.066,38.707z" /><path fill="#50e6ff" d="M41.747,5.055C39.595,5.208,35.211,5.789,33,8l-0.828,0.828l7,7L40,15c2.211-2.211,2.792-6.595,2.945-8.747C42.994,5.568,42.432,5.006,41.747,5.055z" /><rect width="31.113" height="9.899" x="9.944" y="17.55" fill="#35c1f1" transform="rotate(-45.001 25.5 22.5)" /><path fill="#50e6ff" d="M11,30l-0.414,0.414c-0.781,0.781-0.781,2.047,0,2.828l4.172,4.172c0.781,0.781,2.047,0.781,2.828,0L18,37L11,30z" /><circle cx="30.5" cy="17.5" r="3.5" fill="#50e6ff" /><circle cx="30.5" cy="17.5" r="2.5" fill="#0078d4" /><circle cx="23.5" cy="24.5" r="3.5" fill="#50e6ff" /><circle cx="23.5" cy="24.5" r="2.5" fill="#0078d4" /><path fill="#199be2" d="M24,31v6.757c0,0.796-0.316,1.559-0.879,2.121L20,43l-2-6L24,31z" /><path fill="#199be2" d="M17,24h-6.757c-0.796,0-1.559,0.316-2.121,0.879L5,28l6,2L17,24z" /></svg> */}
                </Link>
              </div>

            </div>


          </div>

        </div>


      </main>
      <FooterWidget />


    </>
  );
}
