import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Pie } from "react-chartjs-2";
import { Table } from "antd";

function PaymentInsights() {
    const [paymentData, setPaymentData] = useState([]);

    const getPaymentData = async () => {
        try {
            const response = await axios.get("/api/payments/getPaymentData");
            setPaymentData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getPaymentData();
    }, []);

    //Line chart

    //Organize payment data by month
    const organizePaymentDataByMonth = () => {
        const monthlyPayments = new Array(12).fill(0);
        paymentData.forEach((payment) => {
            const month = new Date(payment.createdAt).getMonth();
            monthlyPayments[month] += payment.amount;
        });

        return monthlyPayments;
    };

    const lineChartData = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ], // Update labels to display the days of the week
        datasets: [
            {
                label: "Payment In The Year",
                data: organizePaymentDataByMonth(),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true, // Ensure y-axis starts from 0
            },
        },
    };

    //payment table

    const formattedPaymentData = paymentData.map((payment) => {
        const createdAtDate = new Date(payment.createdAt);
        const formattedDate = createdAtDate.toLocaleString();

        return {
            ...payment,
            date: formattedDate,
        };
    });

    const columns = [
        {
            title: "Transaction ID",
            dataIndex: "transactionID",
            key: "transactionID",
        },
        {
            title: "Customer ID",
            dataIndex: "customerID",
            key: "customerID",
        },
        {
            title: "Customer Email",
            dataIndex: "customerEmail",
            key: "customerEmail",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
    ];

    return (
        <div>
            <div className="payment-insight-container">
                <div className="payment-insight">
                    <div className="insight-cards">
                        <div className="total-amount-card">
                            <div
                                style={{
                                    marginTop: "20px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Total Amount
                            </div>
                            <div
                                style={{
                                    marginTop: "20px",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                }}
                            >
                                {paymentData.reduce(
                                    (acc, payment) => acc + payment.amount,
                                    0
                                )}{" "}
                                LKR
                            </div>
                        </div>
                        <div className="total-transaction-card">
                            <div
                                style={{
                                    marginTop: "20px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Transaction Count
                            </div>
                            <div
                                style={{
                                    marginTop: "20px",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                }}
                            >
                                {paymentData.length}
                            </div>
                        </div>
                    </div>
                    <div className="insight-chart">
                        <Line
                            data={lineChartData}
                            options={options}
                            width={280}
                            height={100}
                        />
                    </div>
                </div>
                <div className="payment-table-container">
                    <div>
                        <div className="payment-table-top">
                            <div className="payment-table-title">Payments</div>
                            <div clssName="export-payment-btn">
                                <button className="export-payment-csv">
                                    Export Csv
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="payment-table">
                        <Table
                            columns={columns}
                            dataSource={formattedPaymentData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentInsights;
