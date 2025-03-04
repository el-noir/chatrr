import { useAppStore } from "@/store"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Chat = () => {
  const {userInfo} = useAppStore();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!userInfo.profileSetup){
      toast('Please setup profile to continue');
      navigate("/profile");
    }
  })
    return (
      <div>
      Chat
      </div>
    );
  }
  
  
  export default Chat