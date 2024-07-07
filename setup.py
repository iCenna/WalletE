from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in wallete/__init__.py
from wallete import __version__ as version

setup(
	name="wallete",
	version=version,
	description="WalletE",
	author="Hamza Abuabada",
	author_email="abadahhamza@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
