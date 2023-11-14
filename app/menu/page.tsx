"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Menu = () => {
  return (
    <>
      <div className="text-center sm:mt-[80px] mt-[60px] mb-[40px]">
        <h1 className="text-[60px] font-bold text-blue-600">Our Menu</h1>
       
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Espresso</TableCell>
            <TableCell>$2.50</TableCell>
            <TableCell>
              <button className="bg-blue-600 rounded-full text-white font-bold  px-5 py-2">
                Buy
              </button>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Americano</TableCell>
            <TableCell>$3.00</TableCell>
            <TableCell>
              <button className="bg-blue-600 rounded-full text-white font-bold  px-5 py-2">
                Buy
              </button>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Latte</TableCell>
            <TableCell>$4.00</TableCell>
            <TableCell>
              <button className="bg-blue-600 rounded-full text-white font-bold  px-5 py-2">
                Buy
              </button>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Cappuccino</TableCell>
            <TableCell>$4.50</TableCell>
            <TableCell>
              <button className="bg-blue-600 rounded-full text-white font-bold  px-5 py-2">
                Buy
              </button>
            </TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>Mocha Madness</TableCell>
            <TableCell>$5.00</TableCell>
            <TableCell>
              <button className="bg-blue-600 rounded-full text-white font-bold  px-5 py-2">
                Buy
              </button>
            </TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>Caramel Dream Latte</TableCell>
            <TableCell>$4.75</TableCell>
            <TableCell>
              <button className="bg-blue-600 rounded-full text-white font-bold  px-5 py-2">
                Buy
              </button>
            </TableCell>
          </TableRow>

          <TableRow key="8">
            <TableCell>Vanilla Bliss Cold Brew</TableCell>
            <TableCell>$4.50</TableCell>
            <TableCell>
              <button className="bg-blue-600 rounded-full text-white font-bold  px-5 py-2">
                Buy
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Menu;
