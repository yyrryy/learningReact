import {Flex} from "@chakra-ui/react"

export default header =()=>{
    return(
        <Flex m={3} justifyContent="space-between" >
            <p>
                Logo
            </p>
            <p>
                menu
            </p>
        </Flex>
    )
}