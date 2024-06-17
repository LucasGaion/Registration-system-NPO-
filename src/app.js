import { generateClient } from "aws-amplify/api";
import { createForm } from './graphql/mutations';

const client = generateClient()

console.log(createForm)

const newForm = await client.graphql({
    query: createForm,
    variables: {
        input: {
		"areaAtuacao": "Lorem ipsum dolor sit amet",
		"tempoEstudo": "Lorem ipsum dolor sit amet",
		"nivelCloud": "Lorem ipsum dolor sit amet",
		"conhecimentoAws": "Lorem ipsum dolor sit amet",
		"conhecimentoRedes": "Lorem ipsum dolor sit amet",
		"conhecimentoArmazenamento": "Lorem ipsum dolor sit amet",
		"conhecimentoVirtualizacao": "Lorem ipsum dolor sit amet",
		"conhecimentoWindows": "Lorem ipsum dolor sit amet",
		"conhecimentoLinux": "Lorem ipsum dolor sit amet",
		"conhecimentoSeguranca": "Lorem ipsum dolor sit amet",
		"conhecimentoIAM": "Lorem ipsum dolor sit amet"
	}
    }
});

console.log(createForm);
console.log(areaAtuacao);
console.log(tempoEstudo);
console.log(nivelCloud);
console.log(conhecimentoAws);
console.log(conhecimentoRedes);