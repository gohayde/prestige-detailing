/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string; // lucide icon name
  priceEstimate: string;
  bgImage: string;
  stats?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  body: string;
  period: string;
  response?: string;
  tags?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CarType {
  id: string;
  label: string;
  multiplier: number;
  icon: string;
  example: string;
}
