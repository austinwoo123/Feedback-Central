import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    useColorModeValue,
    Editable,
    EditableInput,
    EditablePreview,
    Textarea
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { useQuery, useQueryClient, useMutation } from "react-query";
import api from "../api";
import EmployeeTable from './EmployeeTable';

const fetchRecords = async () => await api.index();


export default function Profile({ records }) {

    const { status, data, error } = useQuery("records", fetchRecords);

    const queryClient = useQueryClient();


    const updateRecord = useMutation(({ payload, id }) =>
        api.update(payload, id)
    );

    function handleUpdate(event) {
        const updatedRecord = {
            ...records.find(
                ({ id }) =>
                    id ===
                    // ⚠️ Make sure to check as a number!
                    Number(event.target.dataset.id)
            ),
            ...{ [event.target.dataset.key]: event.target.value },
        };

        updateRecord.mutate({
            payload: updatedRecord,
            id: event.target.dataset.id,
        });
    }


    return (
        <Center py={6}>
            <Box
                mt="100px"
                maxW={'540px'}
                h={'600px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                        }
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            John Doe
                        </Heading>
                        <Text color={'gray.500'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'} mb="5" >
                            <Editable fontWeight={600} defaultValue="Positive">
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </Stack>
                    </Stack>
                    <Stack spacing={0} align={'center'} mb="5">
                        <Editable fontWeight={600} defaultValue="Needs Improvement">
                            <EditablePreview />
                            <EditableInput />
                        </Editable>
                    </Stack>
                    <Stack spacing={0} align={'center'} mt="10">
                        <Textarea placeholder="Notes" size="lg" h="220px" />
                    </Stack>

                </Box>
            </Box>
        </Center>
    );
}
