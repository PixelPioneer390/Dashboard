import {
  ChartColumn,
  FileText,
  HeartPulse,
  Home,
  Settings,
  Shield,
  UserCog,
  UserPlus,
  Wallet,
  Wrench,
  Split,
  Pickaxe,
  ShieldPlus
} from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/product-image.jpg";


export const navbarLinks = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/",
      },
      {
        label: "Analytics",
        icon: ChartColumn,
        path: "/analytics",
      },
    ],
  },
  {
    title: "Center",
    icon: Split, // You have set the icon here
    links: [
      { label: "Mars BPO Karachi", icon: FileText, path: "/center/karachi" },
      { label: "Mars BPO Saddar", icon: FileText, path: "/center/saddar" },
      { label: "Mars BPO 0.2", icon: FileText, path: "/center/zero-two" },
      { label: "Mars BPO Capital", icon: FileText, path: "/center/capital" },
      { label: "Mars BPO Khanapul", icon: FileText, path: "/center/khanapul" },
      { label: "Mars BPO Silk", icon: FileText, path: "/center/silk" },
      { label: "Mars BPO Adyala", icon: FileText, path: "/center/adyala" },
    ],
  },
  {
    title: "Employees",
    icon: Pickaxe, // You have set the icon here
    links: [
      { label: "Managers", icon: UserCog, path: "/managers" },
      { label: "CSR", icon: UserPlus, path: "/customerservices" },
      { label: "IT Support", icon: Shield, path: "/itsupport" },
    ],
  },
  {
    title: "Campaigns",
    icon: ShieldPlus, // You have set the icon here
    links: [
      { label: "Medicare", icon: HeartPulse, path: "/medicare" },
      { label: "Home Improvement", icon: Wrench, path: "/himp" },
      { label: "Final Expense", icon: Wallet, path: "/final" },
    ],
  },
  {
    title: "Settings",
    links: [
      { label: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];


export const overviewData = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2000 },
  { name: "Mar", total: 1000 },
  { name: "Apr", total: 5000 },
  { name: "May", total: 2000 },
  { name: "Jun", total: 5900 },
  { name: "Jul", total: 2000 },
  { name: "Aug", total: 5500 },
  { name: "Sep", total: 2000 },
  { name: "Oct", total: 4000 },
  { name: "Nov", total: 1500 },
  { name: "Dec", total: 2500 },
];

export const recentSalesData = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    image: ProfileImage,
    total: 1500,
  },
  {
    id: 2,
    name: "James Smith",
    email: "james.smith@email.com",
    image: ProfileImage,
    total: 2000,
  },
  {
    id: 3,
    name: "Sophia Brown",
    email: "sophia.brown@email.com",
    image: ProfileImage,
    total: 4000,
  },
  {
    id: 4,
    name: "Noah Wilson",
    email: "noah.wilson@email.com",
    image: ProfileImage,
    total: 3000,
  },
  {
    id: 5,
    name: "Emma Jones",
    email: "emma.jones@email.com",
    image: ProfileImage,
    total: 2500,
  },
  {
    id: 6,
    name: "William Taylor",
    email: "william.taylor@email.com",
    image: ProfileImage,
    total: 4500,
  },
  {
    id: 7,
    name: "Isabella Johnson",
    email: "isabella.johnson@email.com",
    image: ProfileImage,
    total: 5300,
  },
];

export const topProducts = [
  {
    number: 1,
    name: "Wireless Headphones",
    image: ProductImage,
    description: "High-quality noise-canceling wireless headphones.",
    price: 99.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    number: 2,
    name: "Smartphone",
    image: ProductImage,
    description: "Latest 5G smartphone with excellent camera features.",
    price: 799.99,
    status: "In Stock",
    rating: 4.7,
  },
  {
    number: 3,
    name: "Gaming Laptop",
    image: ProductImage,
    description: "Powerful gaming laptop with high-end graphics.",
    price: 1299.99,
    status: "In Stock",
    rating: 4.8,
  },
  {
    number: 4,
    name: "Smartwatch",
    image: ProductImage,
    description: "Stylish smartwatch with fitness tracking features.",
    price: 199.99,
    status: "Out of Stock",
    rating: 4.4,
  },
  {
    number: 5,
    name: "Bluetooth Speaker",
    image: ProductImage,
    description: "Portable Bluetooth speaker with deep bass sound.",
    price: 59.99,
    status: "In Stock",
    rating: 4.3,
  },
  {
    number: 6,
    name: "4K Monitor",
    image: ProductImage,
    description: "Ultra HD 4K monitor with stunning color accuracy.",
    price: 399.99,
    status: "In Stock",
    rating: 4.6,
  },
  {
    number: 7,
    name: "Mechanical Keyboard",
    image: ProductImage,
    description: "Mechanical keyboard with customizable RGB lighting.",
    price: 89.99,
    status: "In Stock",
    rating: 4.7,
  },
  {
    number: 8,
    name: "Wireless Mouse",
    image: ProductImage,
    description: "Ergonomic wireless mouse with precision tracking.",
    price: 49.99,
    status: "In Stock",
    rating: 4.5,
  },
  {
    number: 9,
    name: "Action Camera",
    image: ProductImage,
    description: "Waterproof action camera with 4K video recording.",
    price: 249.99,
    status: "In Stock",
    rating: 4.8,
  },
  {
    number: 10,
    name: "External Hard Drive",
    image: ProductImage,
    description: "Portable 2TB external hard drive for data storage.",
    price: 79.99,
    status: "Out of Stock",
    rating: 4.5,
  },
];