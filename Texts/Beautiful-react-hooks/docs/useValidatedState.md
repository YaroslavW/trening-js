# useValidatedState

Этот хук похож на useState, но принимает функцию валидатора в качестве первого параметра и значение начального состояния как
во-вторых, затем возвращает массив состояний, где третий параметр является результатом проверки.

### 💡 Зачем?

- Вы хотите получить информацию о проверке состояния.

### Основное использование

```jsx harmony
import { Input } from 'beautiful-react-ui';
import { useValidatedState } from 'beautiful-react-hooks'; 

const passwordValidator = (password) => password.length > 3;

const ValidatedField = () => {
   const [password, setPassword, validation] = useValidatedState(passwordValidator, 'sk8');
   
   return (
     <DisplayDemo style={{textAlign: 'left'}}>
       <Input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          color={validation.valid ? 'success' : 'danger'} 
          icon="key"
          placeholder="Insert password"
          helpText={validation.valid ? 'Password is valid' : 'Password is too short'}
          fluid
        />
     </DisplayDemo>
   );
};

<ValidatedField />
```