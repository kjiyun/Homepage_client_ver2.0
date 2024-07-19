"use client"
import FinalStep from "@/components/templates/ticket/FinalStep";
import FreshmanInfo from "@/components/templates/ticket/FreshmanInfo";
import GeneralInfo from "@/components/templates/ticket/GeneralInfo";
import MemberSelection from "@/components/templates/ticket/MemberSelection";
import PaymentSelection from "@/components/templates/ticket/PaymentSelection";
import TicketSelection from "@/components/templates/ticket/TicketSelection";
import Warning from "@/components/templates/ticket/Warning";
import Bar from "@/components/ui/Bar";
import {useState, useEffect} from "react";


const General_ticket: React.FC = () => {
    const [member, setMember] = useState<number>(1);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [isAlreadyReserved, setIsAlreadyReserved] = useState(false);
    const [dynamicTotalHeightClass, setDynamicTotalHeightClass] = useState(
        "h-[1446px]"
    );
    const [dynamicHeightClass, setDynamicHeightClass] = useState(
        "h-[1046px]"
    );
    useEffect(() => {
        let totalHeightClass = "";
        let newHeightClass = "";
    
        if (member === 1) {
            newHeightClass = "h-[1046px]";
            totalHeightClass = "h-[1476px]";
        } else if (member === 2) {
            newHeightClass = "h-[1150px]";
            totalHeightClass= "h-[1580px]";
        } else if (member === 3) {
            newHeightClass = "h-[1254px]";
            totalHeightClass = "h-[1694px]";
        } else if (member === 4) {
            newHeightClass = "h-[1368px]";
            totalHeightClass = "h-[1808px]";
        } else if (member === 5) {
            newHeightClass = "h-[1391px]";
            totalHeightClass = "h-[1871px]";
        } else {
            newHeightClass = "h-[1391px]";
            totalHeightClass = "h-[1871px]";
        }
        setDynamicHeightClass(newHeightClass);
        setDynamicTotalHeightClass(totalHeightClass);
    
    }, [member]);

    const handleReservationComplete = () => {
        window.location.href = `/ticket/complete`;
    };

    const handleAlreadyReserved = () => {
        window.location.href = `/ticket/search`;
    };
    
    return (
    <div className={`ph:w-full pad:w-[786px] dt:w-[996px] flex flex-col relative mx-auto top-20 ${dynamicTotalHeightClass}`}>
        <div className="h-[200px] w-full pad:rounded-t-xl bg-gray-90 flex flex-col mx-auto">
            <p className="mt-10 text-gray-0 text-center text-2xl font-semibold leading-[48px]">일반 티켓 예매</p>
            <p className="mt-4 text-gray-20 text-center text-lg  font-normal leading-[27px]">2024년 3월 정기 공연</p>
            <p className="mt-1 text-gray-20 text-center text-lg  font-normal leading-[27px]">2024.03.01  SAT  18:00</p>
        </div>
        <div className={`w-full pad:rounded-b-xl pad:border pad:border-gray-15 flex flex-col mx-auto ${dynamicHeightClass}`}>
            <div className="mx-4 pad:mx-12 flex flex-col">
                <MemberSelection description="일반 예매는 최대 1인 5매 구매 가능합니다." min={1} max={5} ticket={"general"}  member={member} setMember={setMember}/>
                <Bar/>
                <GeneralInfo member={member} setMember={setMember} onInfoComplete={setIsFormComplete}/>
                <Bar/>
                <TicketSelection/>
                <Bar/>
                <PaymentSelection/>
                <Bar/>
                <Warning/>
            </div>
            <FinalStep price={5000} amount={member} onReservationComplete={handleReservationComplete} isFormComplete={isFormComplete} onAlreadyReserved={handleAlreadyReserved} isAlreadyReserved = {isAlreadyReserved}/>
        </div>
    </div>
    );
};

export default General_ticket;