package net.hopkins22.demoui;

import com.azure.spring.aad.webapp.AADWebSecurityConfigurerAdapter;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class DemoWebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web) throws Exception {
        System.out.println("Setting up web security");
        web.ignoring().antMatchers("/**").and();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        System.out.println("Setting up http security");
        http.requiresChannel()
                // .antMatchers("/login/oauth2/code/").requiresInsecure()
                .anyRequest().requiresSecure()
                .and()
                .cors();
    }

}
