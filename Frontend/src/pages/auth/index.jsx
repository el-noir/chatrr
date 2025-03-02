import Background from '@/assets/login2.png'
import Victory from '@/assets/victory.svg'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';
import { toast } from 'sonner';
import apiClient from '@/lib/api.client'
import { SIGNUP_ROUTE } from '@/utils/constants';
const Auth = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const validateSignup = ()=>{
        if(!email.length){
            toast.error("Email is required.");
            return false;
        }
        if(!password.length){
            toast.error("Password is required.");
            return false;
        }
        if(password!==confirmPassword){
            toast.error("Password and confirm password should be same.");
            return false
        }

        return true;
    }

    const handleLogin= async () => {
      
    };
    const handleSignup = async () => {
        if (validateSignup()) {
          try {
            const response = await apiClient.post(SIGNUP_ROUTE, { email, password });
            console.log({ response });
          } catch (error) {
            console.error("Signup failed:", error);
            toast.error("Signup failed. Please try again.");
          }
        }
      };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-gray-100">
      <div className="h-[80vh] bg-white border-2 border-white shadow-2xl w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid grid-cols-1 xl:grid-cols-2">
        
        {/* Left Section */}
        <div className="flex flex-col gap-6 items-center justify-center p-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold md:text-5xl">Welcome</h1>
              <img src={Victory} alt="Victory emoji" className="h-12 w-12 ml-2" />
            </div>
            <p className="font-medium">Fill in the details to get started</p>
          </div>

          {/* Tabs */}
          <div className="w-full flex justify-center">
            <Tabs className="w-3/4">
              <TabsList className="flex w-full border-b">
                <TabsTrigger value="login" className="w-1/2 text-center py-3 border-b-2 transition-all data-[state=active]:border-purple-500 data-[state=active]:font-semibold">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="w-1/2 text-center py-3 border-b-2 transition-all data-[state=active]:border-purple-500 data-[state=active]:font-semibold">
                  Signup
                </TabsTrigger>
              </TabsList>

              <TabsContent className="flex flex-col gap-4 mt-4" value="login">
                <Input placeholder="Email" type="email" className="rounded-full p-4"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password" className="rounded-full p-4"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button className="rounded-full p-4 w-full" onClick={handleLogin}>Login</Button>
              </TabsContent>

              <TabsContent className="flex flex-col gap-4 mt-4" value="signup">
                <Input placeholder="Email" type="email" className="rounded-full p-4"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password" className="rounded-full p-4"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="Confirm Password" type="password" className="rounded-full p-4"
                  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button className="rounded-full p-4 w-full" onClick={handleSignup}>Signup</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden xl:flex justify-center items-center p-6">
          <img src={Background} alt="background login" className="h-[400px] object-cover rounded-2xl" />
        </div>

      </div>
    </div>
  );
}

export default Auth;
