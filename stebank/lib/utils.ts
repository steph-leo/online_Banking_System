import { type ClassValue, clsx } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

// Helper function for Tailwind class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date and time with various formats
export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const options: Record<string, Intl.DateTimeFormatOptions> = {
    dateTime: {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    },
    dateDay: {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
    dateOnly: {
      month: "short",
      year: "numeric",
      day: "numeric",
    },
    timeOnly: {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    },
  };

  return {
    dateTime: date.toLocaleString("en-US", options.dateTime),
    dateDay: date.toLocaleString("en-US", options.dateDay),
    dateOnly: date.toLocaleString("en-US", options.dateOnly),
    timeOnly: date.toLocaleString("en-US", options.timeOnly),
  };
};

// Format currency amount
export function formatAmount(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

// Safe JSON parsing and stringifying
export const parseStringify = <T>(value: T): T => JSON.parse(JSON.stringify(value));

// Remove special characters from a string
export const removeSpecialCharacters = (value: string): string => {
  return value.replace(/[^\w\s]/gi, "");
};

// Define a type for URL query parameters
interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

// Function to build a query URL
export function formUrlQuery({ params, key, value }: UrlQueryParams): string {
  const currentUrl = qs.parse(params);
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: { ...currentUrl, [key]: value },
    },
    { skipNull: true }
  );
}

// Define account types
type AccountTypes = "depository" | "credit" | "other";

// Function to return colors based on account type
export function getAccountTypeColors(type: AccountTypes) {
  const colors = {
    depository: {
      bg: "bg-blue-25",
      lightBg: "bg-blue-100",
      title: "text-blue-900",
      subText: "text-blue-700",
    },
    credit: {
      bg: "bg-success-25",
      lightBg: "bg-success-100",
      title: "text-success-900",
      subText: "text-success-700",
    },
    other: {
      bg: "bg-green-25",
      lightBg: "bg-green-100",
      title: "text-green-900",
      subText: "text-green-700",
    },
  };

  return colors[type] ?? colors.other;
}

// Define transaction and category types
interface Transaction {
  category: string;
}

interface CategoryCount {
  name: string;
  count: number;
  totalCount: number;
}

// Function to count transaction categories
export function countTransactionCategories(
  transactions: Transaction[]
): CategoryCount[] {
  const categoryCounts: Record<string, number> = {};
  let totalCount = 0;

  transactions.forEach((transaction) => {
    const category = transaction.category;

    if (category) {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      totalCount++;
    }
  });

  return Object.keys(categoryCounts)
    .map((category) => ({
      name: category,
      count: categoryCounts[category],
      totalCount,
    }))
    .sort((a, b) => b.count - a.count);
}

// Function to extract customer ID from a URL
export function extractCustomerIdFromUrl(url: string): string | null {
  const parts = url.split("/");
  return parts.length > 0 ? parts[parts.length - 1] : null;
}

// Encryption functions
export function encryptId(id: string): string {
  return btoa(id);
}

export function decryptId(id: string): string {
  return atob(id);
}

// Function to get transaction status
export const getTransactionStatus = (date: Date): string => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? "Processing" : "Success";
};
