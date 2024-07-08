'use client'
import { Button } from 'tamagui'
import { AlertCircle } from '@tamagui/lucide-icons'
export default function Home() {

  return(
      <div>
        <Button icon={AlertCircle} onPress={()=>{console.log("Sexo gratis")}}>Olá mundo</Button>
      </div>
  )
}