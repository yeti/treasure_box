FABRIC = {
    "vagrant": {
        "SSH_USER": "vagrant", # SSH username
        "SSH_PASS": "vagrant", # SSH password (consider key-based authentication)
        "SSH_KEY_PATH": "", # Local path to SSH key file, for key-based auth

        # deployment SSH key
        "DEPLOY_MY_PUBLIC_KEY": "~/.ssh/id_rsa.pub",
        "DEPLOY_SSH_KEY_PATH": "",
        "DEPLOY_DB_CLUSTER_SSH_KEY_PATH": "",

        "APPLICATION_HOSTS": ['127.0.0.1:2222'],
        "PRIVATE_APPLICATION_HOSTS": ['127.0.0.1'],
        "DATABASE_HOSTS": ['127.0.0.1:2222'],
        "PRIVATE_DATABASE_HOSTS":['127.0.0.1'],
        "DOMAINS": ["127.0.0.1"], # Host for public site.
        "DB_PASS": "treasurebox", # Live database password
        "ADMIN_PASS": "vagrant", # Live admin user password
        "SECRET_KEY": "DEV",
        "NEVERCACHE_KEY": "DEV",

        # shared application settings
        "SITENAME": "Default",
        "VIRTUALENV_HOME": "/home/vagrant", # Absolute remote path for virtualenvs
        "PROJECT_NAME": "treasure_box", # Unique identifier for project
        "PROJECT_PATH": "/vagrant/treasure_box",
        "REQUIREMENTS_PATH": "requirements.txt", # Path to pip requirements, relative to project
        "GUNICORN_PORT": 8001, # Port gunicorn will listen on
        "LOCALE": "en_US.UTF-8", # Should end with ".UTF-8"
        "REPO_URL": "git@github.com:yeti/treasure_box.git", # Git or Mercurial remote repo URL for the project
        "REPO_BRANCH": "master",
        "LINUX_DISTRO": "wheezy",
    },
    "production": {
        "SSH_USER": "root", # SSH username
        "SSH_PASS": "", # SSH password (consider key-based authentication)
        "SSH_KEY_PATH": "", # Local path to SSH key file, for key-based auth

        # deployment SSH key
        "DEPLOY_MY_PUBLIC_KEY": "~/.ssh/id_rsa.pub",
        "DEPLOY_SSH_KEY_PATH": "",
        "DEPLOY_DB_CLUSTER_SSH_KEY_PATH": "",

        # Yeti sandbox
        "APPLICATION_HOSTS": ['162.209.60.116'], # List of hosts to deploy to
        "DATABASE_HOSTS": ['162.209.60.116'],
        "DOMAINS": ["treasurebox.io"], # Host for public site.
        "DB_PASS": "tr3asu3r3B0x", # Live database password
        "ADMIN_PASS": "admin", # Live admin user password
        "SECRET_KEY": "DEV",
        "NEVERCACHE_KEY": "DEV",

        # shared application settings
        "SITENAME": "TreasureBox",
        "VIRTUALENV_HOME": "/home/treasurebox", # Absolute remote path for virtualenvs
        "PROJECT_NAME": "treasure_box", # Unique identifier for project
        "REQUIREMENTS_PATH": "requirements.txt", # Path to pip requirements, relative to project
        "GUNICORN_PORT": 8555, # Port gunicorn will listen on
        "LOCALE": "en_US.UTF-8", # Should end with ".UTF-8"
        "REPO_URL": "git@github.com:yeti/treasure_box.git", # Git or Mercurial remote repo URL for the project
        "REPO_BRANCH": "master",
        "LINUX_DISTRO": "wheezy",
    }
}