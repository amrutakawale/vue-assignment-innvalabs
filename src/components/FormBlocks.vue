<template>
    <div>
        <form @submit.prevent="submitForm">
            <div v-for="(field, index) in formBlocks.blocks" :key="index">
                <label :for="field.token">{{ field.props.title }}</label>
                <input :type="field.type" :id="field.token" v-model="formData[field.token]" :required="field.props?.required" :placeholder="field.props?.placeholder" />
                <span v-if="formErrors[field.token]" class="error">{{ formErrors[field.props.title] }}</span>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {},
            formErrors: {},
            formBlocks: {
                'blocks': [
                    {
                        token: "PERSON_NAME",
                        type: "text",
                        props: {
                            title: "Name: ",
                            required: true,
                            placeholder: "e.g. John Doe"
                        }
                    },
                    {
                        token: "IS_PERSON_NAME",
                        type: "checkbox",
                        props: {
                            "title": "Is the current person minor?: ",
                            default: false
                        }
                    },
                    {
                        token: "PERSON_DOB",
                        type: "date",
                        props: {
                            title: "Enter your DOB: ",
                            required: true,
                            placeholder: "e.g. 01/01/2000"
                        }
                    }
                ]
            },
            formFields: [
                {
                    id: 'name',
                    label: 'Name',
                    type: 'text',
                    validation: /^[a-zA-Z ]{2,30}$/
                },
                {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    validation: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                }
                // Add more fields as needed
            ]
        };
    },
    methods: {
        validateForm() {
            let isValid = true;

            for (const field of this.formFields) {
                const value = this.formData[field.id];
                if (!field.validation.test(value)) {
                    this.formErrors[field.id] = 'Invalid ' + field.label;
                    isValid = false;
                } else {
                    this.formErrors[field.id] = '';
                }
            }

            return isValid;
        },
        submitForm() {
            if (this.validateForm()) {
                // Form is valid, you can now submit the data
                // You can access the form data using this.formData
                // Example: axios.post('/submit', this.formData)
            } else {
                // Form is not valid, handle the errors
            }
        }
    }
};
</script>

<style>
.error {
    color: red;
}
</style>
