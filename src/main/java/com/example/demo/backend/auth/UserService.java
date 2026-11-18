package com.example.demo.backend.auth;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    public UserResponse registerUser(RegisterRequest request){
        User user = new User();

        user.setLogin(request.getLogin());
        user.setPassword(request.getPassword());

        User saved = userRepository.save(user);

        return new UserResponse(
            saved.getId(),
            saved.getLogin(),
            saved.getImageLink()
        );
    }

    public UserResponse loginUser(LoginRequest request){

        String login = request.getLogin();
        String password = request.getPassword();

        User user = userRepository.findByLogin(login)
        .orElseThrow(() -> new RuntimeException("Пользователь не найден"));

        if (!user.getPassword().equals(password)){
            throw new RuntimeException("Неверный пароль");
        }

        return new UserResponse(user.id, user.login, user.imageLink);
    }

}
