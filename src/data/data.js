import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const themeColors = [
  {
    name: 'green-theme',
    color: '#39A900',
  },
  {
    name: 'dark-blue',
    color: '#00324D',
  },
  {
    name: 'light-blue',
    color: '#82DEF0',
  },
  {
    name: 'beige-theme',
    color: '#FBFBE2',
  },
  {
    name: 'dark-green',
    color: '#385C57',
  },
  {
    color: '#FB9678',
    name: 'brown-theme',
  },
  {
    color: '#FFCE40',
    name: 'dark-yellow',
  },
];
