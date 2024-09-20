import React from "react";
import { useEffect } from 'react';
import Head from "next/head";
import Router from "next/router";

export default function SmartContract() {


  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/smart-contract-development-company') {
      Router.push('/smart-contract-development')
    }
  });


}