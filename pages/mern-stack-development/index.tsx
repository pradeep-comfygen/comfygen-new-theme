import React from "react";
import { useEffect } from 'react';
import Head from "next/head";
import Router from "next/router";

export default function Altcoin() {


  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/mern-stack-development') {
      Router.push('mern-stack-development-services')
    }
  });


}