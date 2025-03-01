import Background from '@/assets/login2.png'
import Victory from '@/assets/victory.svg'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';

const Auth = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const handleLogin= async () => {
      
    };
    const handleSignup = async () => {
     
    };

  return (
    <div className="h-[100vh] w-[100] flex items-center justify-center">
    <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[90vh] md:w-[90vh] lg:w-[70vh] xl:w-[60vh] rounded-3xl grid xl:grid-cols-2">
        <div className='flex flex-col gap-10 items-center justify-center'>
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
                <img src={Victory} alt="Victory imoji" className='h-[100vh]'/>
            </div>
            <p className='font-medium text-center'>Fill to get started</p>
        </div>
        <div className='flex items-center justify-center w-full'>
            <Tabs className='w-3/4'>
                <TabsList className='bg-transparent rounded-none w-full'>
                    <TabsTrigger value="login" className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>Login</TabsTrigger>
                    <TabsTrigger value="signup"
                    className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'
                    >Signup</TabsTrigger>
                </TabsList>
                <TabsContent className="flex flex-col gap-5" value='login'>
                    <Input placeholder="Email" type="email" className="rounded-full p-6" 
                    value = {email} 
                    onChange= {(e)=>setEmail(e.target.value)}></Input>

<Input placeholder="Password" type="password" className="rounded-full p-6" 
                    value = {password} 
                    onChange= {(e)=>setPassword(e.target.value)}></Input>

                    <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>

                </TabsContent>
                <TabsContent className="" value="signup">
                <Input placeholder="Email" type="email" className="rounded-full p-6" 
                    value = {email} 
                    onChange= {(e)=>setEmail(e.target.value)}></Input>

<Input placeholder="Password" type="password" className="rounded-full p-6" 
                    value = {password} 
                    onChange= {(e)=>setPassword(e.target.value)}></Input>

<Input placeholder="Confirm Password" type="password" className="rounded-full p-6" 
                    value = {confirmPassword} 
                    onChange= {(e)=>setConfirmPassword(e.target.value)}></Input>
                     <Button className="rounded-full p-6" onClick={handleSignup}>Signup</Button>
                </TabsContent>
            </Tabs>
        </div>
        </div>
        <div className='hidden xl:flex justify-center items-center'>
            <img src={Background} alt="background login" className='h-[700px]' />
        </div>
    </div>
    </div>
  );
}


export default Auth