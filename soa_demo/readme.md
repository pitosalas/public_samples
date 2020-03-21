# References

* Each of the nodes will be started and stopped automatically by Systemctl
* [Digital Ocean SystemCtl doc](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)
* [Digital Ocean about Sudoers](https://www.digitalocean.com/community/tutorials/how-to-edit-the-sudoers-file-on-ubuntu-and-centos)
* [Installing RUby on Ubuntu](https://linuxize.com/post/how-to-install-ruby-on-ubuntu-18-04/)
* [How to install and manage RabbitMQ on DO](https://www.digitalocean.com/community/tutorials/how-to-install-and-manage-rabbitmq)
* [System Servce Environment Vriables](https://coreos.com/os/docs/latest/using-environment-variables-in-systemd-units.html)

# To Do
* I still have tokens and ip addresses in git. Need to change how I remember them. Probably I should use a non-gitted local bash file to define the environment variables and then call the shared .bashrc requivalent. Another cooler method would be to have that needed only for the primary server and have other servers ask the primary server. Even cooler would be if I used a service manager/discovery service.
