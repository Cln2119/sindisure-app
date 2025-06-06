export const mockTransactions = [
  {
    id: '1',
    type: 'income',
    title: 'Monthly Dues Payment',
    amount: 1250.00,
    date: 'Today',
    category: 'Maintenance Fees'
  },
  {
    id: '2',
    type: 'expense',
    title: 'Plumbing Repairs',
    amount: 450.00,
    date: 'Yesterday',
    category: 'Maintenance'
  },
  {
    id: '3',
    type: 'expense',
    title: 'Electricity Bill',
    amount: 320.75,
    date: 'Aug 15, 2023',
    category: 'Utilities'
  },
  {
    id: '4',
    type: 'income',
    title: 'Special Assessment',
    amount: 800.00,
    date: 'Aug 10, 2023',
    category: 'Special Fee'
  },
  {
    id: '5',
    type: 'expense',
    title: 'Landscaping Services',
    amount: 275.00,
    date: 'Aug 05, 2023',
    category: 'Grounds'
  },
  {
    id: '6',
    type: 'expense',
    title: 'Security System Upgrade',
    amount: 1200.00,
    date: 'Jul 28, 2023',
    category: 'Security'
  },
  {
    id: '7',
    type: 'income',
    title: 'Late Fee Payment',
    amount: 50.00,
    date: 'Jul 25, 2023',
    category: 'Penalties'
  }
];

export const mockNotifications = [
  {
    id: '1',
    type: 'payment',
    title: 'Payment Received',
    message: 'Monthly maintenance fee payment of $1,250.00 has been received from Unit 304.',
    time: '2 hours ago',
    isRead: false
  },
  {
    id: '2',
    type: 'alert',
    title: 'Budget Alert',
    message: 'Maintenance expenses are approaching the monthly budget limit. Consider reviewing expenditures.',
    time: 'Yesterday',
    isRead: false,
    actions: true
  },
  {
    id: '3',
    type: 'warning',
    title: 'Overdue Payment',
    message: 'Unit 201 has an overdue maintenance payment of $1,250.00 that is 15 days late.',
    time: '3 days ago',
    isRead: true
  },
  {
    id: '4',
    type: 'alert',
    title: 'Upcoming Expense',
    message: 'Scheduled HVAC maintenance is due next week with an estimated cost of $750.00.',
    time: '1 week ago',
    isRead: true
  },
  {
    id: '5',
    type: 'payment',
    title: 'New Invoice',
    message: 'New quarterly water utility invoice received for $2,450.00 due on September 15.',
    time: '1 week ago',
    isRead: true
  }
];

export const mockDocuments = [
  {
    id: '1',
    title: 'Annual Financial Report 2023',
    type: 'pdf',
    date: 'Aug 15, 2023',
    size: '4.2 MB'
  },
  {
    id: '2',
    title: 'Maintenance Contract - Elite Plumbing',
    type: 'doc',
    date: 'Jul 28, 2023',
    size: '1.8 MB'
  },
  {
    id: '3',
    title: 'Q2 Budget Analysis',
    type: 'xlsx',
    date: 'Jul 10, 2023',
    size: '3.5 MB'
  },
  {
    id: '4',
    title: 'Board Meeting Minutes - July 2023',
    type: 'pdf',
    date: 'Jul 05, 2023',
    size: '2.1 MB'
  },
  {
    id: '5',
    title: 'Insurance Policy Renewal 2023-2024',
    type: 'pdf',
    date: 'Jun 22, 2023',
    size: '5.7 MB'
  },
  {
    id: '6',
    title: 'Special Assessment Notice',
    type: 'doc',
    date: 'Jun 15, 2023',
    size: '1.2 MB'
  },
  {
    id: '7',
    title: 'Reserve Fund Study',
    type: 'pdf',
    date: 'May 30, 2023',
    size: '8.4 MB'
  }
];

export const fetchDashboardData = async () => {
  // This would normally be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        balance: 125750.42,
        income: 15250.00,
        expenses: 8790.00,
        pendingPayments: 3500.00,
        recentTransactions: mockTransactions.slice(0, 3)
      });
    }, 1000);
  });
};