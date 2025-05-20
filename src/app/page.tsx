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
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="GwuMQJpzjGUV7n3q2Qpbla" x1="13.48" x2="31.634" y1="11.593" y2="37.853" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpbla)" d="M4,38V15h40v23c0,1.1-0.9,2-2,2H6C4.9,40,4,39.1,4,38z" /><path fill="#0d86ad" d="M39.5,23h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,22.776,39.776,23,39.5,23z" /><path fill="#0d86ad" d="M39.5,27h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,26.776,39.776,27,39.5,27z" /><path fill="#0d86ad" d="M39.5,31h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,30.776,39.776,31,39.5,31z" /><path fill="#0d86ad" d="M36.5,35h-10c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5v1C37,34.776,36.776,35,36.5,35z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblb" x1="4.614" x2="42.936" y1="7.741" y2="15.533" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0077d2" /><stop offset="1" stopColor="#0b59a2" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblb)" d="M44,10v5H4v-5c0-1.1,0.9-2,2-2h36C43.1,8,44,8.9,44,10z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblc" x1="16" x2="42" y1="11.5" y2="11.5" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblc)" d="M16.5,13h25c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-25c-0.276,0-0.5,0.224-0.5,0.5v2C16,12.776,16.224,13,16.5,13z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpbld" x1="6.751" x2="8.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="7.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpbld)" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpble" x1="11.751" x2="13.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="12.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpble)" /><radialGradient id="GwuMQJpzjGUV7n3q2Qpblf" cx="24.519" cy="32.852" r="8.922" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ba84f5" /><stop offset=".129" stopColor="#b584f3" /><stop offset=".291" stopColor="#a585ee" /><stop offset=".47" stopColor="#8c87e6" /><stop offset=".662" stopColor="#6889db" /><stop offset=".862" stopColor="#3b8bcd" /><stop offset="1" stopColor="#178dc2" /></radialGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblf)" d="M21.222,21H8.778C8.348,21,8,21.348,8,21.778v12.444C8,34.652,8.348,35,8.778,35h12.444C21.652,35,22,34.652,22,34.222V21.778C22,21.348,21.652,21,21.222,21z" /><path fill="#436dcd" d="M18.136,27.636c-0.447-0.447-1.168-0.457-1.627-0.022l-3.842,3.64V35h8.556C21.652,35,22,34.652,22,34.222V31.5L18.136,27.636z" /><circle cx="19" cy="24" r="1" fill="#fff" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblg" x1="14.965" x2="14.965" y1="25.718" y2="35.161" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#124787" /><stop offset=".923" stopColor="#173b75" /><stop offset="1" stopColor="#173a73" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblg)" d="M8.778,35h12.444c0.316,0,0.586-0.189,0.708-0.459l-8.46-8.46c-0.447-0.447-1.168-0.457-1.627-0.022L8,29.699v4.523C8,34.652,8.348,35,8.778,35z" /></svg>
            Smart Dashboard
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">


            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4caf50" d="M40 21H44V43H40zM34 27H38V43H34zM28 30H32V43H28zM22 32H26V43H22zM16 36H20V43H16zM10 39H14V43H10zM4 41H8V43H4z" /><path fill="#388e3c" d="M44 9L35 9 44 18z" /><path fill="#ffc107" d="M11,5c-3.86,0-7,3.14-7,7s3.14,7,7,7s7-3.14,7-7S14.86,5,11,5z" /><path fill="#fff8e1" d="M11.994,15.974h-1.553V9.893l-1.853,0.581V9.206l3.24-1.18h0.166V15.974z" /><path fill="#388e3c" d="M6.914 36.914L4.086 34.086 14 24.172 17 27.172 27.5 16.672 30.5 19.672 39.586 10.586 42.414 13.414 30.5 25.328 27.5 22.328 17 32.828 14 29.828z" /></svg>

            Sales
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">

            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="134yuU7_LNzt7VM3Qthdla" x1="24" x2="24" y1="13.468" y2="43.109" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#899198" /><stop offset="1" stopColor="#787e85" /></linearGradient><path fill="url(#134yuU7_LNzt7VM3Qthdla)" d="M42,41V16c0-1.105-0.895-2-2-2H8c-1.105,0-2,0.895-2,2v25c0,1.105,0.895,2,2,2h32C41.105,43,42,42.105,42,41z" /><linearGradient id="134yuU7_LNzt7VM3Qthdlb" x1="24" x2="24" y1="23.021" y2="19.149" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0d61a9" /><stop offset="1" stopColor="#16528c" /></linearGradient><path fill="url(#134yuU7_LNzt7VM3Qthdlb)" d="M12,19h24c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2H12c-1.105,0-2-0.895-2-2v0C10,19.895,10.895,19,12,19z" /><path fill="#50e6ff" d="M35,22V6c0-0.552-0.448-1-1-1h-1c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-1c-0.552,0-1,0.448-1,1v16H35z" /><linearGradient id="134yuU7_LNzt7VM3Qthdlc" x1="11.613" x2="35.953" y1="25.752" y2="32.135" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4fe5ff" /><stop offset="1" stopColor="#2eb7ed" /></linearGradient><path fill="url(#134yuU7_LNzt7VM3Qthdlc)" d="M13,26h22c1.105,0,2,0.895,2,2v2c0,1.105-0.895,2-2,2H13c-1.105,0-2-0.895-2-2v-2C11,26.895,11.895,26,13,26z" /><path fill="#057093" d="M15.5,11h9c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-9c-0.276,0-0.5-0.224-0.5-0.5v-1C15,11.224,15.224,11,15.5,11z M30.5,11h2c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-2c-0.276,0-0.5-0.224-0.5-0.5v-1C30,11.224,30.224,11,30.5,11z M30.5,15h2c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-2c-0.276,0-0.5-0.224-0.5-0.5v-1C30,15.224,30.224,15,30.5,15z M15.5,15h6c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5v-1C15,15.224,15.224,15,15.5,15z" /><path fill="#107c42" d="M36,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3C37,39.552,36.552,40,36,40" /><path fill="#cad2d9" d="M15,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C16,39.552,15.552,40,15,40 M22,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C23,39.552,22.552,40,22,40 M29,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C30,39.552,29.552,40,29,40" /><rect width="22" height="3" x="13" y="20" fill="#35c1f1" /></svg>
            Expense Monitoring
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className='size-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="SqV1NW9rRsNjDR09JgNj7a" x1="16.037" x2="31.123" y1="654.802" y2="618.804" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#eba84b" /><stop offset="1" stopColor="#d97218" /></linearGradient><path fill="url(#SqV1NW9rRsNjDR09JgNj7a)" d="M40,42H8c-1.1,0-2-0.9-2-2V12h36v28C42,41.1,41.1,42,40,42z" /><path fill="#fabb62" d="M43,12H5V8c0-1.1,0.9-2,2-2h34c1.1,0,2,0.9,2,2V12z" /><polygon fill="#fdb700" points="38,28 40.329,29.307 43,29.34 44.364,31.636 46.66,33 46.693,35.671 48,38 46.693,40.329 46.66,43 44.364,44.364 43,46.66 40.329,46.693 38,48 35.671,46.693 33,46.66 31.636,44.364 29.34,43 29.307,40.329 28,38 29.307,35.671 29.34,33 31.636,31.636 33,29.34 35.671,29.307" /><linearGradient id="SqV1NW9rRsNjDR09JgNj7b" x1="31" x2="45" y1="624" y2="624" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fede00" /><stop offset="1" stopColor="#ffd000" /></linearGradient><circle cx="38" cy="38" r="7" fill="url(#SqV1NW9rRsNjDR09JgNj7b)" /></svg>
            Smart Inventory Management

          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">


            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSra" x1="28.529" x2="33.6" y1="374.529" y2="379.6" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3079d6" /><stop offset="1" stopColor="#297cd2" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSra)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z" /><path d="M39,21.602L25.101,35.504L23.868,40.4c-0.111,0.442,0.29,0.843,0.732,0.732l4.897-1.233L39,30.394V21.602z" opacity=".05" /><path d="M39,22.309L25.941,35.371l-0.547,1.017h-0.001l-0.864,3.434c-0.099,0.392,0.256,0.746,0.648,0.648l3.446-0.868l1.006-0.543L39,29.667V22.309z" opacity=".07" /><path fill="#c94f60" d="M44.781,22.141l-1.922-1.921c-0.292-0.293-0.768-0.293-1.061,0l-0.904,0.905l2.981,2.981l0.905-0.904C45.073,22.908,45.073,22.434,44.781,22.141" /><path fill="#f0f0f0" d="M26.003,36.016L25,40l3.985-1.003l0.418-3.456L26.003,36.016z" /><path fill="#edbe00" d="M41.333,26.648L28.985,38.996l-2.981-2.981l12.348-12.348L41.333,26.648z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSrb" x1="41.112" x2="41.112" y1="368.688" y2="363.199" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dedede" /><stop offset="1" stopColor="#d6d6d6" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSrb)" d="M38.349,23.667l2.543-2.544l2.983,2.981l-2.543,2.544L38.349,23.667z" /><path fill="#787878" d="M25.508,37.985L25,40l2.014-0.508L25.508,37.985z" /><polygon fill="#0d62ab" points="25,30.414 20,25.414 15.707,29.707 14.293,28.293 20,22.586 25,27.586 30.293,22.293 31.707,23.707" /><circle cx="31" cy="23" r="2" fill="#199be2" /><circle cx="25" cy="29" r="2" fill="#199be2" /><circle cx="20" cy="24" r="2" fill="#199be2" /><circle cx="15" cy="29" r="2" fill="#199be2" /></svg>
            Daily, Weekly & Monthly Reports
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#1a7ecf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M39,11v12c0,3.314-2.686,6-6,6H10.5C7.462,29,5,31.462,5,34.5v0c0,3.038,2.462,5.5,5.5,5.5H39" /><linearGradient id="4Bed96NSHh0HopGpMUAPXa" x1="37.201" x2="40.917" y1="249.501" y2="242.271" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bd4ff4" /><stop offset=".587" stopColor="#a235ec" /><stop offset="1" stopColor="#8c20e5" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXa)" d="M43,8c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S43,5.791,43,8z" /><linearGradient id="4Bed96NSHh0HopGpMUAPXb" x1="37.201" x2="40.917" y1="217.501" y2="210.271" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#bd4ff4" /><stop offset=".587" stopColor="#a235ec" /><stop offset="1" stopColor="#8c20e5" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXb)" d="M43,40c0,2.209-1.791,4-4,4s-4-1.791-4-4s1.791-4,4-4S43,37.791,43,40z" /><linearGradient id="4Bed96NSHh0HopGpMUAPXc" x1="10.223" x2="25.777" y1="246.779" y2="231.226" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d43a02" /><stop offset="1" stopColor="#b9360c" /></linearGradient><path fill="url(#4Bed96NSHh0HopGpMUAPXc)" d="M25.885,22.66C27.81,20.68,29,17.98,29,15c0-6.075-4.925-11-11-11S7,8.925,7,15c0,2.98,1.19,5.68,3.115,7.66c0.011,0.011,7.02,7.027,7.02,7.027c0.477,0.477,1.251,0.477,1.728,0C18.864,29.688,25.874,22.672,25.885,22.66z" /><radialGradient id="4Bed96NSHh0HopGpMUAPXd" cx="18" cy="239" r="5.133" gradientTransform="matrix(1 0 0 -1 0 254)" gradientUnits="userSpaceOnUse"><stop offset=".177" /><stop offset="1" stopOpacity="0" /></radialGradient><circle cx="18" cy="15" r="5.133" fill="url(#4Bed96NSHh0HopGpMUAPXd)" /><circle cx="18" cy="15" r="4.4" fill="#f9f9f9" /></svg>
            Debt Tracking & Follow-ups</div>

        </div>





      </div>


      <div className="whitespace-nowrap animate-marquee h-20 flex items-center ">

        <div className="flex space-x-10">
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white border-white px-4 py-2 rounded-full">
            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="GwuMQJpzjGUV7n3q2Qpbla" x1="13.48" x2="31.634" y1="11.593" y2="37.853" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpbla)" d="M4,38V15h40v23c0,1.1-0.9,2-2,2H6C4.9,40,4,39.1,4,38z" /><path fill="#0d86ad" d="M39.5,23h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,22.776,39.776,23,39.5,23z" /><path fill="#0d86ad" d="M39.5,27h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,26.776,39.776,27,39.5,27z" /><path fill="#0d86ad" d="M39.5,31h-13c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h13c0.276,0,0.5,0.224,0.5,0.5v1C40,30.776,39.776,31,39.5,31z" /><path fill="#0d86ad" d="M36.5,35h-10c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5v1C37,34.776,36.776,35,36.5,35z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblb" x1="4.614" x2="42.936" y1="7.741" y2="15.533" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0077d2" /><stop offset="1" stopColor="#0b59a2" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblb)" d="M44,10v5H4v-5c0-1.1,0.9-2,2-2h36C43.1,8,44,8.9,44,10z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblc" x1="16" x2="42" y1="11.5" y2="11.5" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#7dd8f3" /><stop offset="1" stopColor="#45b0d0" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblc)" d="M16.5,13h25c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-25c-0.276,0-0.5,0.224-0.5,0.5v2C16,12.776,16.224,13,16.5,13z" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpbld" x1="6.751" x2="8.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="7.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpbld)" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpble" x1="11.751" x2="13.032" y1="10.416" y2="12.269" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#75daff" /><stop offset="1" stopColor="#49bef1" /></linearGradient><circle cx="12.5" cy="11.5" r="1.5" fill="url(#GwuMQJpzjGUV7n3q2Qpble)" /><radialGradient id="GwuMQJpzjGUV7n3q2Qpblf" cx="24.519" cy="32.852" r="8.922" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ba84f5" /><stop offset=".129" stopColor="#b584f3" /><stop offset=".291" stopColor="#a585ee" /><stop offset=".47" stopColor="#8c87e6" /><stop offset=".662" stopColor="#6889db" /><stop offset=".862" stopColor="#3b8bcd" /><stop offset="1" stopColor="#178dc2" /></radialGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblf)" d="M21.222,21H8.778C8.348,21,8,21.348,8,21.778v12.444C8,34.652,8.348,35,8.778,35h12.444C21.652,35,22,34.652,22,34.222V21.778C22,21.348,21.652,21,21.222,21z" /><path fill="#436dcd" d="M18.136,27.636c-0.447-0.447-1.168-0.457-1.627-0.022l-3.842,3.64V35h8.556C21.652,35,22,34.652,22,34.222V31.5L18.136,27.636z" /><circle cx="19" cy="24" r="1" fill="#fff" /><linearGradient id="GwuMQJpzjGUV7n3q2Qpblg" x1="14.965" x2="14.965" y1="25.718" y2="35.161" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#124787" /><stop offset=".923" stopColor="#173b75" /><stop offset="1" stopColor="#173a73" /></linearGradient><path fill="url(#GwuMQJpzjGUV7n3q2Qpblg)" d="M8.778,35h12.444c0.316,0,0.586-0.189,0.708-0.459l-8.46-8.46c-0.447-0.447-1.168-0.457-1.627-0.022L8,29.699v4.523C8,34.652,8.348,35,8.778,35z" /></svg>
            Smart Dashboard
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">


            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4caf50" d="M40 21H44V43H40zM34 27H38V43H34zM28 30H32V43H28zM22 32H26V43H22zM16 36H20V43H16zM10 39H14V43H10zM4 41H8V43H4z" /><path fill="#388e3c" d="M44 9L35 9 44 18z" /><path fill="#ffc107" d="M11,5c-3.86,0-7,3.14-7,7s3.14,7,7,7s7-3.14,7-7S14.86,5,11,5z" /><path fill="#fff8e1" d="M11.994,15.974h-1.553V9.893l-1.853,0.581V9.206l3.24-1.18h0.166V15.974z" /><path fill="#388e3c" d="M6.914 36.914L4.086 34.086 14 24.172 17 27.172 27.5 16.672 30.5 19.672 39.586 10.586 42.414 13.414 30.5 25.328 27.5 22.328 17 32.828 14 29.828z" /></svg>

            Sales
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">

            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="134yuU7_LNzt7VM3Qthdla" x1="24" x2="24" y1="13.468" y2="43.109" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#899198" /><stop offset="1" stopColor="#787e85" /></linearGradient><path fill="url(#134yuU7_LNzt7VM3Qthdla)" d="M42,41V16c0-1.105-0.895-2-2-2H8c-1.105,0-2,0.895-2,2v25c0,1.105,0.895,2,2,2h32C41.105,43,42,42.105,42,41z" /><linearGradient id="134yuU7_LNzt7VM3Qthdlb" x1="24" x2="24" y1="23.021" y2="19.149" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0d61a9" /><stop offset="1" stopColor="#16528c" /></linearGradient><path fill="url(#134yuU7_LNzt7VM3Qthdlb)" d="M12,19h24c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2H12c-1.105,0-2-0.895-2-2v0C10,19.895,10.895,19,12,19z" /><path fill="#50e6ff" d="M35,22V6c0-0.552-0.448-1-1-1h-1c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-2c0,0.552-0.448,1-1,1s-1-0.448-1-1h-1c-0.552,0-1,0.448-1,1v16H35z" /><linearGradient id="134yuU7_LNzt7VM3Qthdlc" x1="11.613" x2="35.953" y1="25.752" y2="32.135" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4fe5ff" /><stop offset="1" stopColor="#2eb7ed" /></linearGradient><path fill="url(#134yuU7_LNzt7VM3Qthdlc)" d="M13,26h22c1.105,0,2,0.895,2,2v2c0,1.105-0.895,2-2,2H13c-1.105,0-2-0.895-2-2v-2C11,26.895,11.895,26,13,26z" /><path fill="#057093" d="M15.5,11h9c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-9c-0.276,0-0.5-0.224-0.5-0.5v-1C15,11.224,15.224,11,15.5,11z M30.5,11h2c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-2c-0.276,0-0.5-0.224-0.5-0.5v-1C30,11.224,30.224,11,30.5,11z M30.5,15h2c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-2c-0.276,0-0.5-0.224-0.5-0.5v-1C30,15.224,30.224,15,30.5,15z M15.5,15h6c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5v-1C15,15.224,15.224,15,15.5,15z" /><path fill="#107c42" d="M36,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3C37,39.552,36.552,40,36,40" /><path fill="#cad2d9" d="M15,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C16,39.552,15.552,40,15,40 M22,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C23,39.552,22.552,40,22,40 M29,40h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C30,39.552,29.552,40,29,40" /><rect width="22" height="3" x="13" y="20" fill="#35c1f1" /></svg>
            Expense Monitoring
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">
            <svg className='size-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="SqV1NW9rRsNjDR09JgNj7a" x1="16.037" x2="31.123" y1="654.802" y2="618.804" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#eba84b" /><stop offset="1" stopColor="#d97218" /></linearGradient><path fill="url(#SqV1NW9rRsNjDR09JgNj7a)" d="M40,42H8c-1.1,0-2-0.9-2-2V12h36v28C42,41.1,41.1,42,40,42z" /><path fill="#fabb62" d="M43,12H5V8c0-1.1,0.9-2,2-2h34c1.1,0,2,0.9,2,2V12z" /><polygon fill="#fdb700" points="38,28 40.329,29.307 43,29.34 44.364,31.636 46.66,33 46.693,35.671 48,38 46.693,40.329 46.66,43 44.364,44.364 43,46.66 40.329,46.693 38,48 35.671,46.693 33,46.66 31.636,44.364 29.34,43 29.307,40.329 28,38 29.307,35.671 29.34,33 31.636,31.636 33,29.34 35.671,29.307" /><linearGradient id="SqV1NW9rRsNjDR09JgNj7b" x1="31" x2="45" y1="624" y2="624" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fede00" /><stop offset="1" stopColor="#ffd000" /></linearGradient><circle cx="38" cy="38" r="7" fill="url(#SqV1NW9rRsNjDR09JgNj7b)" /></svg>
            Smart Inventory Management

          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">


            <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSra" x1="28.529" x2="33.6" y1="374.529" y2="379.6" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3079d6" /><stop offset="1" stopColor="#297cd2" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSra)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z" /><path d="M39,21.602L25.101,35.504L23.868,40.4c-0.111,0.442,0.29,0.843,0.732,0.732l4.897-1.233L39,30.394V21.602z" opacity=".05" /><path d="M39,22.309L25.941,35.371l-0.547,1.017h-0.001l-0.864,3.434c-0.099,0.392,0.256,0.746,0.648,0.648l3.446-0.868l1.006-0.543L39,29.667V22.309z" opacity=".07" /><path fill="#c94f60" d="M44.781,22.141l-1.922-1.921c-0.292-0.293-0.768-0.293-1.061,0l-0.904,0.905l2.981,2.981l0.905-0.904C45.073,22.908,45.073,22.434,44.781,22.141" /><path fill="#f0f0f0" d="M26.003,36.016L25,40l3.985-1.003l0.418-3.456L26.003,36.016z" /><path fill="#edbe00" d="M41.333,26.648L28.985,38.996l-2.981-2.981l12.348-12.348L41.333,26.648z" /><linearGradient id="IUd2hVEJVgfMXDL7V3FSrb" x1="41.112" x2="41.112" y1="368.688" y2="363.199" gradientTransform="matrix(1 0 0 -1 0 390)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#dedede" /><stop offset="1" stopColor="#d6d6d6" /></linearGradient><path fill="url(#IUd2hVEJVgfMXDL7V3FSrb)" d="M38.349,23.667l2.543-2.544l2.983,2.981l-2.543,2.544L38.349,23.667z" /><path fill="#787878" d="M25.508,37.985L25,40l2.014-0.508L25.508,37.985z" /><polygon fill="#0d62ab" points="25,30.414 20,25.414 15.707,29.707 14.293,28.293 20,22.586 25,27.586 30.293,22.293 31.707,23.707" /><circle cx="31" cy="23" r="2" fill="#199be2" /><circle cx="25" cy="29" r="2" fill="#199be2" /><circle cx="20" cy="24" r="2" fill="#199be2" /><circle cx="15" cy="29" r="2" fill="#199be2" /></svg>
            Daily, Weekly & Monthly Reports
          </div>
          <div className="mx-10 flex items-center gap-x-2 h-12 text-black bg-white to-cyan-500 border-white px-4 py-2 rounded-full">
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
        {/* bg-gradient-to-r from-akauntme-2 via-akauntme to-blue-600 */}
        <div className='shadow-md h-auto lg:h-screen '>


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
                        bg-clip-text text-transparent bg-linear-to-r from-akauntme-2 via-akauntme to-blue-600">
                <div className="lg:leading-18">
                  <span className="italic ">Akaunting </span> made easy for your Business
                </div>
              </h1>
              <div className="flex justify-center items-center">

                <p className="my-5 text-gray-600 italic text-base sm:text-xl md:text-[1.2rem] max-w-md">
                  {/* From Chaos to Clarity — Akauntme. */}
                  From inventory to income, invoices to online sales
                  <span className="italic font-semibold text-indigo-500"> Akauntme </span> handles it all
                </p>
              </div>

              <div className="lg:mt-10 flex justify-center gap-x-6 " >
                <Link className="group text-sm lg:text-xl inline-flex shadow-md hover:scale-[.97] transition-transform items-center justify-center rounded-2xl py-2 md:py-3 px-7
                            focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white 
                              hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
                  color="slate" href="/login">
                  <span className="bg-gradient-to-r bg-clip-text from-indigo-600 to-blue-500 text-transparent">
                    Get Started.
                  </span>
                </Link>



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
            <h1 className="text-center text-transparent font-semibold  text-2xl md:text-3xl lg:text-7xl my-10 lg:my-14 max-w-[400px] lg:max-w-5xl">
              <span className="bg-gradient-to-tl from-blue-600 via-cyan-500 to-teal-600 bg-clip-text">
                Try it out and see the ease to scale your
              </span>

              <span className="relative ml-3 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                <span className="text-white relative">business</span>
              </span>
            </h1>



          </div>

          <div className="w-full flex justify-center">
            <Image src="/images/preview-template.png" className="lg:rounded-3xl lg:h-full" priority alt="Dashboard Image" width={1000} height={1000} style={{ width: "auto", height: "auto" }} />
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


        <div className="bg-gradient-to-tr from-akauntme via-akauntme-deep to-akauntme-2 h-auto lg:mt-[300px] font-(family-name:--Canva-Sans)">
          <div className="mx-5 lg:mx-30 lg:px-20 text-center flex justify-center items-center pt-20">
            <div className="flex flex-col justify-center items-center gap-y-10  my-[20px]">
              <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-white flex items-center justify-center">
                Why Akauntme?
              </h1>
              <div className="text-white w-full grid items-center px-3 lg:px-20 lg:w-[1200px] justify-center  
              gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2
              text-base md:text-xl lg:leading-7">
                <div className="w-full relative bg-gradient-to-r backdrop-filter backdrop-blur-lg bg-opacity-30 
                border border-white/20
                from-akauntme-2 via-akauntme-2 to-blue-600 text-white rounded-2xl p-5">
                  <div className="absolute bottom-0 -right-1">
                    <svg className="size-50 fill-white/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                      <path d="M24 6C22.125 6 20.528815 6.7571334 19.503906 7.9101562C18.478997 9.0631791 18 10.541667 18 12C18 13.458333 18.478997 14.936821 19.503906 16.089844C20.528815 17.242867 22.125 18 24 18C25.875 18 27.471185 17.242867 28.496094 16.089844C29.521003 14.936821 30 13.458333 30 12C30 10.541667 29.521003 9.0631791 28.496094 7.9101562C27.471185 6.7571334 25.875 6 24 6 z M 11 8C9.4583337 8 8.1121484 8.6321335 7.2539062 9.5976562C6.3956641 10.563179 6 11.791667 6 13C6 14.208333 6.3956642 15.436821 7.2539062 16.402344C8.1121484 17.367867 9.4583337 18 11 18C12.541666 18 13.887852 17.367867 14.746094 16.402344C15.604336 15.436821 16 14.208333 16 13C16 11.791667 15.604336 10.563179 14.746094 9.5976562C13.887852 8.6321335 12.541666 8 11 8 z M 37 8C35.458334 8 34.112148 8.6321335 33.253906 9.5976562C32.395664 10.563179 32 11.791667 32 13C32 14.208333 32.395664 15.436821 33.253906 16.402344C34.112148 17.367867 35.458334 18 37 18C38.541666 18 39.887852 17.367867 40.746094 16.402344C41.604336 15.436821 42 14.208333 42 13C42 11.791667 41.604336 10.563179 40.746094 9.5976562C39.887852 8.6321335 38.541666 8 37 8 z M 24 9C25.124999 9 25.778816 9.3678665 26.253906 9.9023438C26.728997 10.436821 27 11.208333 27 12C27 12.791667 26.728997 13.563179 26.253906 14.097656C25.778816 14.632133 25.124999 15 24 15C22.875001 15 22.221184 14.632133 21.746094 14.097656C21.271003 13.563179 21 12.791667 21 12C21 11.208333 21.271003 10.436821 21.746094 9.9023438C22.221184 9.3678665 22.875001 9 24 9 z M 11 11C11.791666 11 12.195482 11.242867 12.503906 11.589844C12.81233 11.936821 13 12.458333 13 13C13 13.541667 12.81233 14.063179 12.503906 14.410156C12.195482 14.757133 11.791666 15 11 15C10.208334 15 9.8045176 14.757133 9.4960938 14.410156C9.1876697 14.063179 9 13.541667 9 13C9 12.458333 9.1876698 11.936821 9.4960938 11.589844C9.8045176 11.242867 10.208334 11 11 11 z M 37 11C37.791666 11 38.195482 11.242867 38.503906 11.589844C38.81233 11.936821 39 12.458333 39 13C39 13.541667 38.81233 14.063179 38.503906 14.410156C38.195482 14.757133 37.791666 15 37 15C36.208334 15 35.804518 14.757133 35.496094 14.410156C35.18767 14.063179 35 13.541667 35 13C35 12.458333 35.18767 11.936821 35.496094 11.589844C35.804518 11.242867 36.208334 11 37 11 z M 7.5 20C5.57 20 4 21.57 4 23.5L4 30C4 34.41 7.59 38 12 38C12.71 38 13.400547 37.910469 14.060547 37.730469C13.640547 36.830469 13.330156 35.869375 13.160156 34.859375C12.790156 34.949375 12.4 35 12 35C9.24 35 7 32.76 7 30L7 23.5C7 23.22 7.22 23 7.5 23L13.029297 23C13.129297 21.86 13.569766 20.83 14.259766 20L7.5 20 z M 18.5 20C16.585045 20 15 21.585045 15 23.5L15 33C15 37.952719 19.047281 42 24 42C28.952719 42 33 37.952719 33 33L33 23.5C33 21.585045 31.414955 20 29.5 20L18.5 20 z M 33.740234 20C34.430234 20.83 34.870703 21.86 34.970703 23L40.5 23C40.78 23 41 23.22 41 23.5L41 30C41 32.76 38.76 35 36 35C35.6 35 35.209844 34.949375 34.839844 34.859375C34.669844 35.869375 34.359453 36.830469 33.939453 37.730469C34.599453 37.910469 35.29 38 36 38C40.41 38 44 34.41 44 30L44 23.5C44 21.57 42.43 20 40.5 20L33.740234 20 z M 18.5 23L29.5 23C29.795045 23 30 23.204955 30 23.5L30 33C30 36.331281 27.331281 39 24 39C20.668719 39 18 36.331281 18 33L18 23.5C18 23.204955 18.204955 23 18.5 23 z" />
                    </svg>
                  </div>

                  <div className="flex justify-center gap-x-2 items-center">
                    <div>

                      <svg className="size-10 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                        <path d="M24 6C22.125 6 20.528815 6.7571334 19.503906 7.9101562C18.478997 9.0631791 18 10.541667 18 12C18 13.458333 18.478997 14.936821 19.503906 16.089844C20.528815 17.242867 22.125 18 24 18C25.875 18 27.471185 17.242867 28.496094 16.089844C29.521003 14.936821 30 13.458333 30 12C30 10.541667 29.521003 9.0631791 28.496094 7.9101562C27.471185 6.7571334 25.875 6 24 6 z M 11 8C9.4583337 8 8.1121484 8.6321335 7.2539062 9.5976562C6.3956641 10.563179 6 11.791667 6 13C6 14.208333 6.3956642 15.436821 7.2539062 16.402344C8.1121484 17.367867 9.4583337 18 11 18C12.541666 18 13.887852 17.367867 14.746094 16.402344C15.604336 15.436821 16 14.208333 16 13C16 11.791667 15.604336 10.563179 14.746094 9.5976562C13.887852 8.6321335 12.541666 8 11 8 z M 37 8C35.458334 8 34.112148 8.6321335 33.253906 9.5976562C32.395664 10.563179 32 11.791667 32 13C32 14.208333 32.395664 15.436821 33.253906 16.402344C34.112148 17.367867 35.458334 18 37 18C38.541666 18 39.887852 17.367867 40.746094 16.402344C41.604336 15.436821 42 14.208333 42 13C42 11.791667 41.604336 10.563179 40.746094 9.5976562C39.887852 8.6321335 38.541666 8 37 8 z M 24 9C25.124999 9 25.778816 9.3678665 26.253906 9.9023438C26.728997 10.436821 27 11.208333 27 12C27 12.791667 26.728997 13.563179 26.253906 14.097656C25.778816 14.632133 25.124999 15 24 15C22.875001 15 22.221184 14.632133 21.746094 14.097656C21.271003 13.563179 21 12.791667 21 12C21 11.208333 21.271003 10.436821 21.746094 9.9023438C22.221184 9.3678665 22.875001 9 24 9 z M 11 11C11.791666 11 12.195482 11.242867 12.503906 11.589844C12.81233 11.936821 13 12.458333 13 13C13 13.541667 12.81233 14.063179 12.503906 14.410156C12.195482 14.757133 11.791666 15 11 15C10.208334 15 9.8045176 14.757133 9.4960938 14.410156C9.1876697 14.063179 9 13.541667 9 13C9 12.458333 9.1876698 11.936821 9.4960938 11.589844C9.8045176 11.242867 10.208334 11 11 11 z M 37 11C37.791666 11 38.195482 11.242867 38.503906 11.589844C38.81233 11.936821 39 12.458333 39 13C39 13.541667 38.81233 14.063179 38.503906 14.410156C38.195482 14.757133 37.791666 15 37 15C36.208334 15 35.804518 14.757133 35.496094 14.410156C35.18767 14.063179 35 13.541667 35 13C35 12.458333 35.18767 11.936821 35.496094 11.589844C35.804518 11.242867 36.208334 11 37 11 z M 7.5 20C5.57 20 4 21.57 4 23.5L4 30C4 34.41 7.59 38 12 38C12.71 38 13.400547 37.910469 14.060547 37.730469C13.640547 36.830469 13.330156 35.869375 13.160156 34.859375C12.790156 34.949375 12.4 35 12 35C9.24 35 7 32.76 7 30L7 23.5C7 23.22 7.22 23 7.5 23L13.029297 23C13.129297 21.86 13.569766 20.83 14.259766 20L7.5 20 z M 18.5 20C16.585045 20 15 21.585045 15 23.5L15 33C15 37.952719 19.047281 42 24 42C28.952719 42 33 37.952719 33 33L33 23.5C33 21.585045 31.414955 20 29.5 20L18.5 20 z M 33.740234 20C34.430234 20.83 34.870703 21.86 34.970703 23L40.5 23C40.78 23 41 23.22 41 23.5L41 30C41 32.76 38.76 35 36 35C35.6 35 35.209844 34.949375 34.839844 34.859375C34.669844 35.869375 34.359453 36.830469 33.939453 37.730469C34.599453 37.910469 35.29 38 36 38C40.41 38 44 34.41 44 30L44 23.5C44 21.57 42.43 20 40.5 20L33.740234 20 z M 18.5 23L29.5 23C29.795045 23 30 23.204955 30 23.5L30 33C30 36.331281 27.331281 39 24 39C20.668719 39 18 36.331281 18 33L18 23.5C18 23.204955 18.204955 23 18.5 23 z" />
                      </svg>
                    </div>
                    <h1 className="text-xl md:text-2xl font-semibold">Role-based Staff Permissions</h1>
                  </div>
                  <p className="mt-6 text-left font-light">
                    Delegate with confidence. Akauntme allows you to assign roles to staff with customizable permissions — from sales entry to inventory editing. Keep your data secure, workflows organized, and responsibilities clear across your business team.
                  </p>

                </div>

                <div className="w-full relative bg-gradient-to-r backdrop-filter backdrop-blur-lg bg-opacity-30 
                border border-white/20
                from-akauntme-2 via-akauntme-2 to-blue-600 text-white rounded-2xl p-5">
                  <div className="absolute bottom-0 -right-1">
                    <svg className="size-50 fill-white/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                      <path d="M3.5 6 A 1.50015 1.50015 0 1 0 3.5 9L6.2558594 9C6.9837923 9 7.5905865 9.5029243 7.7285156 10.21875L8.0273438 11.78125L11.251953 28.716797C11.835068 31.772321 14.527135 34 17.638672 34L36.361328 34C39.472865 34 42.166064 31.773177 42.748047 28.716797L45.972656 11.78125 A 1.50015 1.50015 0 0 0 44.5 10L10.740234 10L10.675781 9.6582031C10.272657 7.5455321 8.4069705 6 6.2558594 6L3.5 6 z M 11.3125 13L42.6875 13L39.800781 28.15625C39.484764 29.81587 38.051791 31 36.361328 31L17.638672 31C15.948808 31 14.516781 29.8158 14.199219 28.15625L14.199219 28.154297L11.3125 13 z M 29.484375 15.984375 A 1.50015 1.50015 0 0 0 28.439453 18.560547L29.878906 20L21.5 20 A 1.50015 1.50015 0 1 0 21.5 23L29.878906 23L28.439453 24.439453 A 1.50015 1.50015 0 1 0 30.560547 26.560547L34.560547 22.560547 A 1.50015 1.50015 0 0 0 34.560547 20.439453L30.560547 16.439453 A 1.50015 1.50015 0 0 0 29.484375 15.984375 z M 20 36 A 3 3 0 0 0 20 42 A 3 3 0 0 0 20 36 z M 34 36 A 3 3 0 0 0 34 42 A 3 3 0 0 0 34 36 z" />
                    </svg>
                  </div>

                  <div className="flex justify-center gap-x-2 items-center">
                    <div>
                      <svg className="size-10 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                        <path d="M3.5 6 A 1.50015 1.50015 0 1 0 3.5 9L6.2558594 9C6.9837923 9 7.5905865 9.5029243 7.7285156 10.21875L8.0273438 11.78125L11.251953 28.716797C11.835068 31.772321 14.527135 34 17.638672 34L36.361328 34C39.472865 34 42.166064 31.773177 42.748047 28.716797L45.972656 11.78125 A 1.50015 1.50015 0 0 0 44.5 10L10.740234 10L10.675781 9.6582031C10.272657 7.5455321 8.4069705 6 6.2558594 6L3.5 6 z M 11.3125 13L42.6875 13L39.800781 28.15625C39.484764 29.81587 38.051791 31 36.361328 31L17.638672 31C15.948808 31 14.516781 29.8158 14.199219 28.15625L14.199219 28.154297L11.3125 13 z M 29.484375 15.984375 A 1.50015 1.50015 0 0 0 28.439453 18.560547L29.878906 20L21.5 20 A 1.50015 1.50015 0 1 0 21.5 23L29.878906 23L28.439453 24.439453 A 1.50015 1.50015 0 1 0 30.560547 26.560547L34.560547 22.560547 A 1.50015 1.50015 0 0 0 34.560547 20.439453L30.560547 16.439453 A 1.50015 1.50015 0 0 0 29.484375 15.984375 z M 20 36 A 3 3 0 0 0 20 42 A 3 3 0 0 0 20 36 z M 34 36 A 3 3 0 0 0 34 42 A 3 3 0 0 0 34 36 z" />
                      </svg>
                    </div>
                    <h1 className="text-xl md:text-2xl font-semibold">Sales & Expense Tracking</h1>
                  </div>
                  <p className="mt-6 text-left font-light">
                    Easily record every sale and expense to understand your financial flow at a glance. Akauntme categorizes transactions intelligently, gives you breakdowns per product or service, and lets you tag costs by business function.

                  </p>

                </div>


                <div className="w-full relative bg-gradient-to-r backdrop-filter backdrop-blur-lg bg-opacity-30 
                border border-white/20
                from-akauntme-2 via-akauntme-2 to-blue-600 text-white rounded-2xl p-5">
                  <div className="absolute bottom-0 -right-1">
                    <svg className="size-50 fill-white/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                      <path d="M30.181641 3.3789062C29.772087 3.3813975 29.35806 3.4648651 28.962891 3.6367188L19.976562 7.5410156C18.395542 8.2266916 17.652429 10.108777 18.339844 11.689453L26.332031 30.078125C27.017707 31.659146 28.897839 32.402259 30.478516 31.714844L39.46875 27.808594C41.047655 27.121128 41.78979 25.24262 41.103516 23.662109L33.111328 5.2714844C32.76849 4.4809737 32.126594 3.9007464 31.373047 3.6035156C30.996273 3.4549003 30.591194 3.376415 30.181641 3.3789062 z M 30.279297 6.3769531C30.312396 6.3904235 30.339213 6.4203079 30.359375 6.4667969L33.849609 14.498047L24.613281 18.595703L21.091797 10.494141 A 1.50015 1.50015 0 0 0 21.091797 10.492188C21.051207 10.398867 21.076942 10.335246 21.169922 10.294922 A 1.50015 1.50015 0 0 0 21.169922 10.292969L30.160156 6.3886719 A 1.50015 1.50015 0 0 0 30.160156 6.3867188C30.206816 6.3664262 30.246198 6.3634828 30.279297 6.3769531 z M 10.316406 7.9902344C9.6230243 8.0136122 8.9240993 8.1778671 8.2617188 8.4980469L4.8476562 10.150391 A 1.50015 1.50015 0 1 0 6.1523438 12.849609L9.5683594 11.199219C10.708837 10.647938 12.029763 11.146839 12.521484 12.314453L21.300781 33.166016C21.455564 33.533542 21.747311 33.782514 21.949219 34.113281C20.81557 34.248979 19.792114 34.695297 19.128906 35.441406C18.353997 36.313179 18 37.416667 18 38.5C18 39.583333 18.353997 40.686821 19.128906 41.558594C19.903815 42.430367 21.125 43 22.5 43C23.875 43 25.096185 42.430367 25.871094 41.558594C26.646003 40.686821 27 39.583333 27 38.5C27 38.215315 26.90557 37.937241 26.855469 37.654297C28.451682 38.022581 30.141195 38.039005 31.75 37.333984L31.75 37.335938L43.402344 32.230469 A 1.50015 1.50015 0 1 0 42.199219 29.482422L30.546875 34.587891C28.026246 35.692496 25.133027 34.537285 24.064453 32L24.066406 32L15.285156 11.150391C14.428447 9.1160993 12.396553 7.9201008 10.316406 7.9902344 z M 35.044922 17.248047L38.351562 24.857422C38.390952 24.948142 38.362694 25.015986 38.271484 25.056641L29.283203 28.962891C29.189883 29.003481 29.124308 28.977746 29.083984 28.884766L25.808594 21.347656L35.044922 17.248047 z M 22.5 37C23.124999 37 23.403816 37.180367 23.628906 37.433594C23.853997 37.686821 24 38.083333 24 38.5C24 38.916667 23.853997 39.313179 23.628906 39.566406C23.403816 39.819633 23.124999 40 22.5 40C21.875001 40 21.596184 39.819633 21.371094 39.566406C21.146003 39.313179 21 38.916667 21 38.5C21 38.083333 21.146003 37.686821 21.371094 37.433594C21.596184 37.180367 21.875001 37 22.5 37 z" />
                    </svg>
                  </div>
                  <div className="flex justify-center gap-x-2 items-center">
                    <div>
                      <svg className="size-10 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
                        <path d="M30.181641 3.3789062C29.772087 3.3813975 29.35806 3.4648651 28.962891 3.6367188L19.976562 7.5410156C18.395542 8.2266916 17.652429 10.108777 18.339844 11.689453L26.332031 30.078125C27.017707 31.659146 28.897839 32.402259 30.478516 31.714844L39.46875 27.808594C41.047655 27.121128 41.78979 25.24262 41.103516 23.662109L33.111328 5.2714844C32.76849 4.4809737 32.126594 3.9007464 31.373047 3.6035156C30.996273 3.4549003 30.591194 3.376415 30.181641 3.3789062 z M 30.279297 6.3769531C30.312396 6.3904235 30.339213 6.4203079 30.359375 6.4667969L33.849609 14.498047L24.613281 18.595703L21.091797 10.494141 A 1.50015 1.50015 0 0 0 21.091797 10.492188C21.051207 10.398867 21.076942 10.335246 21.169922 10.294922 A 1.50015 1.50015 0 0 0 21.169922 10.292969L30.160156 6.3886719 A 1.50015 1.50015 0 0 0 30.160156 6.3867188C30.206816 6.3664262 30.246198 6.3634828 30.279297 6.3769531 z M 10.316406 7.9902344C9.6230243 8.0136122 8.9240993 8.1778671 8.2617188 8.4980469L4.8476562 10.150391 A 1.50015 1.50015 0 1 0 6.1523438 12.849609L9.5683594 11.199219C10.708837 10.647938 12.029763 11.146839 12.521484 12.314453L21.300781 33.166016C21.455564 33.533542 21.747311 33.782514 21.949219 34.113281C20.81557 34.248979 19.792114 34.695297 19.128906 35.441406C18.353997 36.313179 18 37.416667 18 38.5C18 39.583333 18.353997 40.686821 19.128906 41.558594C19.903815 42.430367 21.125 43 22.5 43C23.875 43 25.096185 42.430367 25.871094 41.558594C26.646003 40.686821 27 39.583333 27 38.5C27 38.215315 26.90557 37.937241 26.855469 37.654297C28.451682 38.022581 30.141195 38.039005 31.75 37.333984L31.75 37.335938L43.402344 32.230469 A 1.50015 1.50015 0 1 0 42.199219 29.482422L30.546875 34.587891C28.026246 35.692496 25.133027 34.537285 24.064453 32L24.066406 32L15.285156 11.150391C14.428447 9.1160993 12.396553 7.9201008 10.316406 7.9902344 z M 35.044922 17.248047L38.351562 24.857422C38.390952 24.948142 38.362694 25.015986 38.271484 25.056641L29.283203 28.962891C29.189883 29.003481 29.124308 28.977746 29.083984 28.884766L25.808594 21.347656L35.044922 17.248047 z M 22.5 37C23.124999 37 23.403816 37.180367 23.628906 37.433594C23.853997 37.686821 24 38.083333 24 38.5C24 38.916667 23.853997 39.313179 23.628906 39.566406C23.403816 39.819633 23.124999 40 22.5 40C21.875001 40 21.596184 39.819633 21.371094 39.566406C21.146003 39.313179 21 38.916667 21 38.5C21 38.083333 21.146003 37.686821 21.371094 37.433594C21.596184 37.180367 21.875001 37 22.5 37 z" />
                      </svg>
                    </div>
                    <h1 className="text-xl md:text-2xl font-semibold">Inventory Management</h1>
                  </div>
                  <p className="mt-6 text-left font-light">
                    Track your stock levels in real-time and receive automatic alerts when products run low.
                    Akauntme helps you stay ahead of demand by letting you set reorder thresholds, and
                    generate restock requests — so you never run out of what keeps your business running.
                  </p>

                </div>



                <div className="w-full relative bg-gradient-to-r backdrop-filter backdrop-blur-lg bg-opacity-30 
                border border-white/20
                from-akauntme-2 via-akauntme-2 to-blue-600 text-white rounded-2xl p-5">
                  <div className="absolute bottom-0 -right-1">
                    <svg className="size-50 fill-white/20" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" >
                      <path d="M12.5 5C10.019 5 8 7.019 8 9.5L8 38.5C8 40.981 10.019 43 12.5 43L29.669922 43C28.225922 42.302 26.976531 41.27 26.019531 40L12.5 40C11.673 40 11 39.327 11 38.5L11 9.5C11 8.673 11.673 8 12.5 8L35.5 8C36.327 8 37 8.673 37 9.5L37 24.460938C38.095 24.805937 39.103 25.343531 40 26.019531L40 9.5C40 7.019 37.981 5 35.5 5L12.5 5 z M 15.5 12 A 1.50015 1.50015 0 1 0 15.5 15L30.5 15 A 1.50015 1.50015 0 1 0 30.5 12L15.5 12 z M 15.5 19 A 1.50015 1.50015 0 1 0 15.5 22L30.5 22 A 1.50015 1.50015 0 1 0 30.5 19L15.5 19 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L22.5 29 A 1.50015 1.50015 0 1 0 22.5 26L15.5 26 z M 34 26C29.589 26 26 29.589 26 34C26 38.411 29.589 42 34 42C35.665 42 37.210187 41.487281 38.492188 40.613281L43.439453 45.560547C43.732453 45.854547 44.116 46 44.5 46C44.884 46 45.267547 45.853547 45.560547 45.560547C46.145547 44.974547 46.145547 44.025453 45.560547 43.439453L40.615234 38.492188C41.488234 37.210187 42 35.665 42 34C42 29.589 38.411 26 34 26 z M 34 29C36.757 29 39 31.243 39 34C39 36.757 36.757 39 34 39C31.243 39 29 36.757 29 34C29 31.243 31.243 29 34 29 z M 15.5 33C14.671 33 14 33.671 14 34.5C14 35.329 14.671 36 15.5 36L24.201172 36C24.069172 35.354 24 34.685 24 34C24 33.662 24.017781 33.329 24.050781 33L15.5 33 z" />
                    </svg>
                  </div>

                  <div className="flex justify-center gap-x-2 items-center">
                    <div>
                      <svg className="size-10 fill-white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" >
                        <path d="M12.5 5C10.019 5 8 7.019 8 9.5L8 38.5C8 40.981 10.019 43 12.5 43L29.669922 43C28.225922 42.302 26.976531 41.27 26.019531 40L12.5 40C11.673 40 11 39.327 11 38.5L11 9.5C11 8.673 11.673 8 12.5 8L35.5 8C36.327 8 37 8.673 37 9.5L37 24.460938C38.095 24.805937 39.103 25.343531 40 26.019531L40 9.5C40 7.019 37.981 5 35.5 5L12.5 5 z M 15.5 12 A 1.50015 1.50015 0 1 0 15.5 15L30.5 15 A 1.50015 1.50015 0 1 0 30.5 12L15.5 12 z M 15.5 19 A 1.50015 1.50015 0 1 0 15.5 22L30.5 22 A 1.50015 1.50015 0 1 0 30.5 19L15.5 19 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L22.5 29 A 1.50015 1.50015 0 1 0 22.5 26L15.5 26 z M 34 26C29.589 26 26 29.589 26 34C26 38.411 29.589 42 34 42C35.665 42 37.210187 41.487281 38.492188 40.613281L43.439453 45.560547C43.732453 45.854547 44.116 46 44.5 46C44.884 46 45.267547 45.853547 45.560547 45.560547C46.145547 44.974547 46.145547 44.025453 45.560547 43.439453L40.615234 38.492188C41.488234 37.210187 42 35.665 42 34C42 29.589 38.411 26 34 26 z M 34 29C36.757 29 39 31.243 39 34C39 36.757 36.757 39 34 39C31.243 39 29 36.757 29 34C29 31.243 31.243 29 34 29 z M 15.5 33C14.671 33 14 33.671 14 34.5C14 35.329 14.671 36 15.5 36L24.201172 36C24.069172 35.354 24 34.685 24 34C24 33.662 24.017781 33.329 24.050781 33L15.5 33 z" />
                      </svg>
                    </div>
                    <h1 className="text-xl md:text-2xl font-semibold">Daily/Weekly Reports</h1>
                  </div>
                  <p className="mt-6 text-left font-light">

                    Know how your business is performing at any moment. Akauntme automatically generates profit reports, shows daily trends, and delivers weekly summaries to your inbox — so you can make informed decisions without digging through numbers.                  </p>

                </div>

              </div>
              {/* <div>
                <Link href="/learn" className="block relative px-6 py-2 rounded-full bg-gradient-to-r 
                from-akauntme-2 via-akauntme-2 to-blue-600
                text-white font-sembold shadow-lg hover:shadow-xl 
                backdrop-filter backdrop-blur-lg bg-opacity-30 
                border border-white/20 tracking-wider">
                  Learn more

                </Link>
              </div> */}

            </div>


          </div>

        </div>


        <div className="bg-white h-[70vh] lg:mt-[100px] font-(family-name:--Canva-Sans)">
          <div className="mx-5 lg:mx-30 lg:px-20 text-center flex justify-center items-center pt-20">
            <div className="flex  flex-col justify-center items-center gap-y-10">
              <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-black lg:w-[800px]">
                More than just a bookkeepping platform for business
              </h1>
              <p className="text-black lg:w-[600px] text-base md:text-xl lg:leading-7">
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
